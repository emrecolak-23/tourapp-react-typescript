import './form-input.styles.scss'
import { FC } from 'react'

interface FormInputProp {
    id: string,
    placeholder: string,
    type: string,
    label: string
}


const FormInput:FC<FormInputProp> = ({id, placeholder, type, label}) => {
    return <div className="form__group">
        <input type={type} className='form__input' id={id} placeholder={placeholder} required/>
        <label htmlFor={id} className="form__label">{label}</label>
    </div>
}

export default FormInput