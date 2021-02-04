import React,{Component} from 'react'
import s from './QuizCreator.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {createControl} from "../../form/formFramework";

const createOptionControl = (number) => {
    return createControl({
        label:`Variant ${number}`,
        errorMessage: "Value can't be empty",
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
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (event, controlName) => {

    }

    // renderInputs = () => {
    //     return Object.keys(this.state.formControls).map((controlName,index)=>{
    //         const control = this.state.formControls[controlName]
    //         return(
    //             <Input>
    //                 key={controlName}
    //                 label={control.label}
    //                 value={control.value}
    //                 valid={control.valid}
    //                 shouldValidate={!!control.validation}
    //                 touched={control.touched}
    //                 errorMessage={control.errorMessage}
    //                 onChange={event => this.changeHandler(event.target.value, controlName)}
    //             </Input>
    //         )
    //     })
    // }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={event => {
                        this.onChangeHandler(event,controlName)
                    }}
                />
            )
        })
    }

    render(){
        return(
            <div className={s.QuizCreator}>
                <h1>QuizCreator </h1>
                <form onSubmit={this.submitHandler}>

                    {this.renderInputs()}

                    <select name="" id=""></select>
                    <div className={s.btnblock}>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Add question
                        </Button>
                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                            Create quiz
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}