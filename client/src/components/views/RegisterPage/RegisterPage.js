import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Register.css';
function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push("/login")
                } else {
                    alert("Failed to sign up")
                }
            })
    }



    return (
        <div className="register-box">
            <h2>Register</h2>
            <form onSubmit={onSubmitHandler}
            >   
            <div className="user-box">
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
               </div>
               <div className="user-box">
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
              </div>
              <div className="user-box">
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                </div>
                <div className="user-box">
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                </div>
                <br />
                <button type="submit">
                   Sign up
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)