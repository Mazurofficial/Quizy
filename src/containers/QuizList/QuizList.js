import React,{Component} from 'react'
import s from './QuizList.module.scss'
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component{

    state = {
        quizes:[],
        loading: true
    }

    renderQuizList(){
        return this.state.quizes.map((quiz,index)=>{
            return (
                <li key={quiz.id}>
                    <NavLink
                        to={'/quiz/' + quiz.id}
                    >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try{
            const response = await axios.get('quizes.json')
            console.log(response.data)
            const quizes = []
            Object.keys(response.data).forEach((key,index)=>{
                quizes.push({
                    id:key,
                    name: `Test ${index + 1}`
                })
            })
            this.setState({
                quizes,
                loading: false
            })
            } catch (e){
            console.log(e)
        }
    }

    render(){
        return(
            <div className={s.QuizList}>
                <div>
                    <h1>QuizList</h1>
                    {
                        this.state.loading
                        ? <Loader/>
                        : <ul>{this.renderQuizList()}</ul>
                    }
                </div>
            </div>
        )
    }
}