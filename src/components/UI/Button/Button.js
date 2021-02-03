import React from 'react'
import s from './Button.module.scss'

const Button = props => {

    let classes = [
        s.Button,
        s[props.type]
    ]

    return(
        <button onClick={props.onClick}
                className={classes.join(' ')}
                disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button