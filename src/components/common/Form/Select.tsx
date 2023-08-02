import { ChangeEvent } from 'react';

interface SelectProps {
    placeholder: string;
    name?: string;
    options: Array<{
        name: string;
        _id: string;
    }>;
    onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
    label?: string;
    error?: string;
    selectedProfession?: any;
}

const Select = ({ name, options, placeholder, onChange, label, error, selectedProfession }: SelectProps): JSX.Element => {
    return (
        <div className='form-group mb-3'>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                className={`form-control ${error ? 'is-invalid' : ''}`}
                name={name}
                onChange={onChange}>
                {!selectedProfession && <option value='' disabled selected>{placeholder}</option>}
                {options.map(({ name, _id }) => <option
                    selected={_id === selectedProfession._id}
                    value={_id} key={_id}>{name}</option>)}
            </select>
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
};

export { Select };
