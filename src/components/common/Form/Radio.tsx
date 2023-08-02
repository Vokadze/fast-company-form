import { ChangeEvent } from 'react';

interface SelectProps {
    name: string;
    inputs: Array<{
        name: string;
        value: string;
    }>;
    checkedValue: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    title: string;
}

const Radio = ({ inputs, checkedValue = inputs[0].value, onChange, title, name }: SelectProps): JSX.Element => {
    return (
        <div className='mb-3'>
            <p><strong>{title}</strong></p>
            {inputs.map(({ name: inputName, value }) => (
                <div className="form-check form-check-inline" key={inputName + value}>
                    <input className="form-check-input"
                        type="radio"
                        name={name}
                        id={value}
                        checked={value === checkedValue}
                        value={value}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor={value}>
                        {inputName}
                    </label>
                </div>
            ))}
        </div>
    );
};

export { Radio };
