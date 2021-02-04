import React,{Component} from 'react'
import s from './QuizList.module.scss'
import {NavLink} from "react-router-dom";

export default class QuizList extends Component{

    quizList = [1,2,3]

    renderQuizList(){
        return this.quizList.map((quiz,index)=>{
            return (
                <li key={index}>
                    <NavLink
                        to={'/quiz/' + quiz}
                    >
                        Quiz {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render(){
        return(
            <div className={s.QuizList}>
                <div>
                    <h1>QuizList</h1>
                    <ul>
                        {this.renderQuizList()}
                    </ul>
                </div>
            </div>
        )
    }
}