import React from 'react'
import { Link } from 'react-router-dom'
import { GiStraightPipe } from 'react-icons/gi';
const LoginRoute = () => {
    return (
        <div>
            <div className='route'>
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><GiStraightPipe /></li>
                    <li><Link to="">Login</Link></li>
                </ol>
            </div>
        </div>

    )
}
export default LoginRoute