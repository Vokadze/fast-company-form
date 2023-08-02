import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextInput } from '../common/Form/TextInput';
import { Select } from '../common/Form/Select';
import { Radio } from '../common/Form/Radio';
import { MultiSelect } from '../common/Form/MultiSelect';
import { checkObjectValues } from '../../services/utils';
import { validator, validatorConfig } from '../../services/validator';
import API from '../../api/index';
import { IQualities } from '../../types/qualities.type';
import { IUser, IProfession } from '../../types/user.type';

interface UserFormProps {
    getFormData: (data: IUser) => void;
    buttonName: string;
    saveDataCb: () => void;
    state?: IUser;
};

const UserForm = ({ getFormData, buttonName = 'Создать', saveDataCb, state }: UserFormProps): JSX.Element => {
    // eslint-disable-next-line
    const initialState = state
        ? state
        : {
            name: '',
            email: '',
            profession: '',
            sex: 'male',
            qualities: []
        };

    const [formData, setFormData] = useState<IUser>(initialState as IUser);
    const [currentInput, setCurrentInput] = useState({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [professions, setProfessions] = useState<Array<{ name: string; _id: string }>>([]);
    const [qualities, setQualities] = useState<IQualities[] | []>([]);
    const navigate = useNavigate();
    const radioData = [
        {
            name: 'Male',
            value: 'male'
        },
        {
            name: 'Female',
            value: 'female'
        }
    ];

    const getProfessionById = (id: string): IProfession => {
        const professionIndex = Object.values(professions).findIndex(({ _id }) => _id === id);
        return professions[professionIndex];
    };

    useEffect(() => {
        API.professions.fetchAll()
            .then((professions) => setProfessions(Object.values(professions)))
            .catch(error => console.log(error));
        API.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.values(data).map(quality => ({
                value: quality._id,
                label: quality.name,
                color: quality.color
            }));
            setQualities(qualitiesList);
        })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        acivateButton();
    }, [errors, formData]);

    useEffect(() => {
        setFormData(initialState as IUser);
    }, [state]);

    const handleSubmit = (evt: FormEvent<HTMLButtonElement>): void => {
        evt.preventDefault();
        const professionId = formData.profession._id ? formData.profession._id : formData.profession;

        getFormData({
            ...formData,
            profession: getProfessionById(professionId as string)
        });

        saveDataCb();
    };

    const handleChange = (data: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> | any): void => {
        const dataName = Array.isArray(data.value) ? data.name : data.target.name;
        const dataValue = Array.isArray(data.value) ? data.value : data.target.value;
        setCurrentInput({
            [dataName]: dataValue
        });

        setFormData({
            ...formData,
            [dataName]: dataValue
        });
    };

    useEffect(() => {
        validate();
    }, [currentInput]);

    const validate = (): void => {
        const formErrors = validator(currentInput, validatorConfig, errors);
        setErrors(formErrors);
    };

    const acivateButton = (): void => {
        const filledInputs = checkObjectValues(formData).length;
        const allInputs = Object.values(formData).length;
        const inputErrors = checkObjectValues(errors).length;

        if (filledInputs === allInputs && !inputErrors) {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        };
    };

    return (
        <form className='col col-md-4 has-validation'>
            <TextInput
                name='name'
                value={formData.name}
                onChange={handleChange} placeholder={'Имя'}
                error={errors.name}
            />
            <TextInput
                name='email'
                value={formData.email as string}
                onChange={handleChange}
                placeholder={'Email'}
                error={errors.email}
            />
            <Select
                name='profession'
                options={professions}
                onChange={handleChange}
                placeholder={'Выберите профессию'}
                error={errors.profession}
                selectedProfession={formData.profession}
            />
            <Radio
                inputs={radioData}
                name={'gender'}
                checkedValue={formData.sex as string}
                onChange={handleChange}
                title='Выберите ваш пол'
            />
            <MultiSelect
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                error={errors.qualities}
                defaulOptions={formData.qualities as IQualities[]}
            />
            <div className="d-flex">
                <button type='button' className='btn btn-secondary me-3' onClick={() => navigate(-1)} >Назад</button>
                <button
                    className='btn btn-primary'
                    disabled={disableButton}
                    type='button'
                    onClick={handleSubmit}
                >
                    {buttonName}
                </button>
            </div>
        </form>
    );
};

export { UserForm };
