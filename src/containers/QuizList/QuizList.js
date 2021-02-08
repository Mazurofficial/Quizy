import React,{Component} from 'react'
import s from './QuizList.module.scss'
import {NavLink} from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizes} from "../../store/actions/quiz";

 class QuizList extends Component{

    renderQuizList(){
        return this.props.quizes.map((quiz,index)=>{
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

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render(){
        return(
            <div className={s.QuizList}>
                <div>
                    <h1>QuizList</h1>
                    {
                        this.props.loading && this.props.quizes.length !== 0
                        ? <Loader/>
                        : <ul>{this.renderQuizList()}</ul>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizes: state.quizReducer.quizes,
        loading: state.quizReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuizList)