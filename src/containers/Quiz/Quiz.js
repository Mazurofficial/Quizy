import React, {Component} from 'react'
import s from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

class Quiz extends Component{
    state = {
        activeQuestion: 0,
        isFinished: false ,
        answerState: null, // { [id]: 'success' 'error' }
        results: {},
        quiz: [],
        loading: true
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

        if (question.rightAnswerId === answerId){

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

    async componentDidMount() {
        try {
           const response = await axios.get(`quizes/${this.props.match.params.id}.json`)
            const quiz = response.data

            this.setState({
                quiz,
                loading:false
            })
        } catch (e){
            console.log(e)
        }
    }

    render() {
        return(
            <div className={s.Quiz}>
                <h1>{this.state.quizName}</h1>
                {
                    this.state.loading
                    ? <Loader/>
                    : <div className={s.wrapper}>
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
                }
            </div>
        )
    }
}

export default Quiz