  
import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import './css/LoginPage.css'
function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error˝')
                }
            })


    }


    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={onSubmitHandler}
            >    
                <div className="user-box">
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} required="" />
                </div>
                <div className="user-box">
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} required="" />
                </div>
                <button type="Submit">
                 Login
                </button>
                <a href="/register">register now!</a>
               </form>
        </div>
    )
}

export default withRouter(LoginPage)