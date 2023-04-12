import './radio-button.styles.scss'
import { FC } from 'react'

interface RadioButtonProps {
    id: string,
    name: string,
    label: string
}


const RadioButton:FC<RadioButtonProps> = ({id, name, label}) => {
    return (
    <div className="form__radio-group">
        <input type="radio" className="form__radio-input" id={id} name={name}/>
        <label className='form__radio-label' htmlFor={id}>
            <span className='form__radio-button'></span>
            {label}
        </label>
    </div>
    )
}

export default RadioButton