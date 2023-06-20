import React from 'react'
import "./login.css"
import LoginRoute from './LoginRoute'
const Login = () => {
    return (
        <section className='contact-section'>
            <LoginRoute />
            <div className="contact-container">
                <input className="input" type="text" name="username" placeholder="Username" value=""  />
                <input className="input" type="password" name="password" placeholder="Password" value=""  />
                <div className="additional-options">
                    <label className="checkbox-label">
                        <input className="checkbox" type="checkbox" name="remember" />
                        Remember me
                    </label>
                    <a className="forgot-password" href="/forgot-password">Forgot Password</a>
                </div>
                <button className="button" type="submit">Login</button>
            </div>
        </section>

    )
}

export default Login
