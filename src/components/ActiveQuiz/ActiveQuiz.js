import React, {Component} from 'react'
import s from './ActiveQuiz.module.scss'
import AnswerList from "./AnsweraList/AnsweraList";

const ActiveQuiz = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.item}>
                <div className={s.top}>
                    <h2 className={s.head}>
                        <span>{props.answerNumber}.</span> {props.question}
                    </h2>
                    <p className={s.counter}>
                        {props.answerNumber} of {props.quizLenth}
                    </p>
                </div>
                <AnswerList
                    answers={props.answers}
                    onAnswerClick={props.onAnswerClick}
                    answerState={props.answerState}
                />
            </div>
        </div>

    )
}

export default ActiveQuiz