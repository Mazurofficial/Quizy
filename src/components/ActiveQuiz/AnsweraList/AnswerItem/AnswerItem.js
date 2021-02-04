import React from 'react'
import s from './AnswerItem.module.scss'

const AnswerItem = props => {
    const classes = [s.item]

    if(props.answerState){
        classes.push(s[props.answerState])
    }

    return(
        <li
            className={classes.join(' ')}
            onClick={()=>props.onAnswerClick(props.answer.id)}
        >
            {
                props.answer.text
            }
        </li>
    )
}

export default AnswerItem