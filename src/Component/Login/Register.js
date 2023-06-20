import React from 'react'
import "./login.css"
const Register = () => {
    return (
        <div className="contact-container">
            <input className="input" type="text" name="username" placeholder="Username" value="" />
            <input className="input" type="password" name="password"  placeholder="Password" value=""  />
            <button className="button" type="submit">register</button>
        </div>
    )
}

export default Register
