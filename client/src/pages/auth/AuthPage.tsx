import React, { useState } from 'react'

import './styles.css'

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        pass: "",
        confirmPass: ""
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    } 

    return (
        <div className="auth__container">
            <h1>Sign Up</h1>
            <form className="auth-form" onSubmit={onSubmit}>
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Enter name" 
                    value={formData.name}
                    onChange={onChange}
                />

                <input 
                    name="password" 
                    type="password" 
                    placeholder="Enter password"
                    value={formData.pass}
                    onChange={onChange}
                />

                <input 
                    name="confirm-password" 
                    type="password" 
                    placeholder="Confirm password"
                    value={formData.confirmPass}
                    onChange={onChange}
                />

                <button type="submit" className="auth-button">
                    Login
                </button>

            </form>
        </div>
    )
}

const Signup = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    return (
        <div className="auth__container">
            <h1>Sign Up</h1>
            <form className="auth-form">
                <input name="name" type="text" placeholder="name"/>

                <input name="password" type="password" placeholder="password"/>

                <button type="submit" className="auth-button">
                    Login
                </button>
            </form>
        </div>
    )
}

const AuthPage = () => {
    const [toggleAuth, setToggleAuth] = useState(true)

    return (
        <div className="page__container">
            <div className="auth-toggle">

            </div>

            {toggleAuth ? <Login/> : <Signup/>}
        </div>
    )
}

export default AuthPage