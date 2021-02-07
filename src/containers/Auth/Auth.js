import React,{Component} from 'react'
import s from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {validateControl} from "../../form/formFramework";
import axios from "axios";

export default class Auth extends Component{

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email "example@test.com"',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password "min: 6 symbols"',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVKXfuva7q5TVw-xF3o79M92y-MUDZECE', authData)
            console.log(response.data)
        } catch (e){
            console.log(e)
        }
    }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVKXfuva7q5TVw-xF3o79M92y-MUDZECE', authData)
            console.log(response.data)
        } catch (e){
            console.log(e)
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
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

    render() {
        return(
            <div className={s.Auth}> 
                <h1>Authentication</h1>
                <form onSubmit={this.submitHandler}>

                    {this.renderInputs()}

                    <div className={s.btnblock}>
                        <Button
                            type='success'
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Login
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}