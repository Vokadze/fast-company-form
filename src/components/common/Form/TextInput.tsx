import { ChangeEvent } from 'react';


interface TextInputProps {
    placeholder: string;
    name: string;
    value: string;
    type?: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    error?: string;
}


const TextInput = ({ name, value, placeholder, type = 'text', onChange, label, error }: TextInputProps): JSX.Element => {
    return (
        <div className='form-group mb-3'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                className={`form-control ${error ? 'is-invalid' : ''}`}
                value={value}
                onChange={onChange}
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
};

export { TextInput };
