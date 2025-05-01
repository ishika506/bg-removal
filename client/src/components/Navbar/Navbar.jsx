import React from 'react';
import { assets } from '../../assets/assets'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

    const { openSignIn } = useClerk();
    const { isSignedIn, user } = useUser()
    return (
        <div className="navbar">
            <Link to={'/'}><img src={assets.logo} alt='Company Logo' className="navbar-logo" /></Link>
            {isSignedIn ? <div>
                <UserButton/>
            </div>
                : <button onClick={() => openSignIn({})} className="get-started-btn">
                    Get Started
                    <img src={assets.arrow_icon} alt='Arrow Icon' className="arrow-icon" />
                </button>}

        </div>
    );
};

export default Navbar;
