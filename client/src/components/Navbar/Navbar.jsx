import React, { useContext, useEffect } from 'react';
import { assets } from '../../assets/assets'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

    const { openSignIn } = useClerk();
    const { isSignedIn, user } = useUser()
    const {credit,loadCreditsData} = useContext(AppContext)

    useEffect(()=>{
       if(isSignedIn){
        loadCreditsData()
       }

    },[isSignedIn])
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
