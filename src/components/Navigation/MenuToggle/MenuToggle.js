import React from 'react'
import s from './MenuToggle.module.scss'

const MenuToggle = props => {
    let classes = [
        s.MenuToggle,
        'fa'
    ]

    if(props.isOpen){
        classes.push('fa-times')
        classes.push(s.open)
    }else {
        classes.push('fa-bars')
    }

    return(
        <i
            className={classes.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle