import React, {Component} from 'react'
import s from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component{
    state = {
        activeQuestion: 0,
        isFinished: false ,
        answerState: null, // { [id]: 'success' 'error' }
        results: {},
        quizName: 'Name of quiz',
        quiz: [
            {
                id: 1,
                question: 'First question ?',
                answers: [
                    {text: 'answer 1', id:1},
                    {text: 'answer 2', id:2},
                    {text: 'answer 3', id: 3},
                ],
                right_answer: 2,
            },
            {
                id: 2,
                question: 'Second question ?',
                answers: [
                    {text: 'answer 1', id:1},
                    {text: 'answer 2', id:2},
                    {text: 'answer 3', id: 3},
                ],
                right_answer: 2,
            }
        ]
    }

    onAnswerClickHandler = answerId =>{

        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.right_answer === answerId){

            if(!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: { [answerId] : 'success'},
            })

            const timeout = window.setTimeout(() => {

                if (this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 500)

        }else {
            results[question.id] = 'error'
            this.setState({
                results,
                answerState: { [answerId] : 'error'}
            })
        }
    }

    isQuizFinished(){
        return(this.state.activeQuestion + 1 === this.state.quiz.length)
    }

    retryHandler = () => {
         this.setState({
             activeQuestion: 0,
             isFinished: false ,
             answerState: null, // { [id]: 'success' 'error' }
             results: {}
         })
    }


    render() {
        return(
            <div className={s.Quiz}>
                {/*<img src={logo} alt="logo"/>*/}
                <h1>{this.state.quizName}</h1>
                <div className={s.wrapper}>
                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry ={this.retryHandler}
                            />
                            : <ActiveQuiz
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    answers={this.state.quiz[this.state.activeQuestion].answers}
                                    onAnswerClick={this.onAnswerClickHandler}
                                    quizLenth={this.state.quiz.length}
                                    answerNumber={this.state.activeQuestion + 1}
                                    answerState={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz