import React,{Component,Fragment} from 'react'
import s from './QuizCreator.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {createControl,validateControl } from "../../form/formFramework";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios-quiz";

const createOptionControl = (number) => {
    return createControl({
        label:`Variant ${number}`,
        errorMessage: "Value can't be empty",
        value: '',
        id: number
    },{
        required:true
    })
}

const createFormControls = () => {
    return {
        question: createControl({
            label: 'Enter the question',
            errorMessage: "Question can't be empty"
        },{
            required: true
        }),
        option1: createOptionControl(1),
        option2:createOptionControl(2),
        option3:createOptionControl(3),
        option4:createOptionControl(4)
    }
}

export default class QuizCreator extends Component{

    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = event => {
        event.preventDefault()

        const quiz = this.state.quiz.concat()
        const index = quiz.length + 1
        const {question, option1, option2, option3, option4} = this.state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {
                    text: option1.value,
                    id: option1.id
                },
                {
                    text: option2.value,
                    id: option2.id
                },
                {
                    text: option3.value,
                    id: option3.id
                },
                {
                    text: option4.value,
                    id: option4.id
                },
            ]
        }

        quiz.push(questionItem)

        this.setState({
            quiz,
            rightAnswerId: 1,
            isFormValid: false,
            formControls: createFormControls()
        })
    }

    createQuizHandler = async event => {
        event.preventDefault()
        try{
            await axios.post('quizes.json', this.state.quiz)
            this.setState({
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormControls()
            })
        } catch (e){
            console.log(e)
        }
    }



    changeHandler = (value, controlName) => {

        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = value
        control.touched = true
        control.valid = validateControl(control.value,control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name =>{
            isFormValid = formControls[name].valid && isFormValid
        })


        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control = this.state.formControls[controlName]
            return(
                <Fragment key={index + controlName}>
                    <Input
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        shouldValidate={!!control.validation}
                        onChange={event => {
                            this.changeHandler(event.target.value,controlName)
                        }}
                    />
                    {index === 0 ? <hr/> : null}
                </Fragment>
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render(){
        return(
            <div className={s.QuizCreator}>
                <h1>QuizCreator </h1>
                <form onSubmit={this.submitHandler}>

                    {this.renderInputs()}

                    <Select
                        label='Select the right answer'
                        value={this.state.rightAnswerId}
                        onChange={this.selectChangeHandler}
                        options={[
                            {
                                text:1,
                                value:1,
                            },
                            {
                                text:2,
                                value:2,
                            },
                            {
                                text:3,
                                value:3,
                            },
                            {
                                text:4,
                                value:4,
                            }
                        ]}
                    />

                    <div className={s.btnblock}>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Add question
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Create quiz
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}