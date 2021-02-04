import React from 'react'
import s from './Input.module.scss'

const Input = props => {

    const isInvalid = ({valid, touched, shouldValidate}) => {
        return !valid && touched && shouldValidate
    }


    const inputType = props.type || 'text'
    const cls = [s.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)){
        cls.push(s.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                ? <p>{props.errorMessage || 'Check the correction on information'}</p>
                : null
            }
        </div>
    )
}

export default Input