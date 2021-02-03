import React, {Component} from 'react'
import s from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button";

const FinishedQuiz = props =>{

    const rightAnswersCount = Object.keys(props.results).reduce((total,key) => {
        if(props.results[key] === 'success'){
            total++
        }

        return total
    },0)

    return(
        <div className={s.wrapper}>
            <h1 className={s.isFinished}>is finished</h1>
            <ul className={s.checkList}>
                {props.quiz.map((quizItem,index) => {
                        let classes = [
                            'fa',
                            props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
                            s[props.results[quizItem.id]]
                        ]
                        return(
                            <li key={index}>
                                <p><span>{index + 1}. </span>{quizItem.question}</p>
                                <i className={classes.join(' ')} />
                            </li>
                        )
                    })}
            </ul>
            <p className={s.result}>
                Number of right answers: {rightAnswersCount} / {props.quiz.length}
            </p>
            <div className={s.buttonBlock}>
                <Button type='primary' onClick={props.onRetry}>
                    repeat
                </Button>
                <Button type='success' >
                    test list
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz