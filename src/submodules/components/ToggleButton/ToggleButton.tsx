import { useState } from 'react';
import './ToggleButton.scss';

export const ToggleButton = ({ defaultChecked, onChange, label }: { defaultChecked?: boolean, onChange: (newValue: boolean) => void, label?: string }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked || false);


    const onKeyDown = (e: { keyCode: number; }) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            handleToggle();
        }
    }

    const handleToggle = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className='toggle-button--container'>
        <div className={`toggle-button ${isChecked ? 'checked' : ''}`} onClick={handleToggle} onKeyDown={onKeyDown} tabIndex={1} >
            <input className="toggle-button--input" type="checkbox" aria-labelledby='toggle-button--label' checked={isChecked} onChange={handleToggle} />
            <div className="slider"></div>
        </div>
        {label && <label id="toggle-button--label">{label}</label>}
        </div>
    );
};
