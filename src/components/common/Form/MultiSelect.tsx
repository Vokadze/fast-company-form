import { useState, useEffect } from 'react';
import Select from 'react-select';
import { IQualities } from '../../../types/qualities.type';
import './Multiselect.css';

interface MultiSelectProps {
    name: string;
    options: IQualities[];
    onChange: (value: {
        value: Array<Record<string, string>>;
        name: string;
    }) => void;
    label: string;
    error: string;
    defaulOptions?: IQualities[];
}

const MultiSelect = ({ options, onChange, name, label, error, defaulOptions }: MultiSelectProps): JSX.Element => {
    const [defaulQualities, setdDefaulQualities] = useState<any>(false);

    useEffect(() => {
        if (defaulOptions?.length) {
            const defaulQualitiesList = defaulOptions.map((quality: any) => ({
                value: quality._id,
                label: quality.name,
                color: quality.color
            })) as IQualities[];
            setdDefaulQualities(defaulQualitiesList);
        }
    }, [defaulOptions]);

    const handleChange = (value: any): void => {
        const qualitiesList = Object.values(value).map((quality: any) => ({
            _id: quality.value,
            name: quality.label,
            color: quality.color
        }));

        onChange({
            name,
            value: qualitiesList
        });
    };

    if (!defaulQualities) {
        return <h3>loading</h3>;
    }

    return (
        <div className='mb-4'>
            <label className='form-label'>{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                defaultValue={defaulQualities}
                options={options}
                className={`basic-multi-select form-control Multiselect ${error ? 'is-invalid' : ''}`}
                classNamePrefix='select'
                onChange={handleChange}
                name={name}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
};

export { MultiSelect };
