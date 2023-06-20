import React, { useState } from 'react';
import './AccountInformation.css';
import { BiDownArrow } from 'react-icons/bi';
import AccountRoute from './AccountRoute';
const AccountInformation = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <AccountRoute />
            <div className='account-section' style={{ height: '270px' }}>
                <div className="account-information">
                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                        Edit your account information <BiDownArrow className='down-arrow' />
                    </button>

                    {isOpen && (
                        <div className='dropdown-content '>
                            <input className="drop-input" type="text" name="firstName" placeholder="First Name" />
                            <input className="drop-input" type="text" name="lastName" placeholder="Last Name" />
                            <input className="drop-input" type="email" name="email" placeholder="Email Address" />
                            <input className="drop-input" type="tel" name="telephone" placeholder="Telephone" />
                            <input className="drop-input" type="text" name="fax" placeholder="Fax" />
                            <button className="continue-button">Continue</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AccountInformation;
