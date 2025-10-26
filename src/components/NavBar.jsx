import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import User from '../assets/user.png'
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
    const {user, logOut} = use(AuthContext)
    const handleLogOut = () =>{
        console.log('user ty logout')
        logOut().then (() => {
            alert("You're Logged out successfully")
        })
        .catch((error) => {
            console.log(error)
            
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login_btn flex items-center gap-3">
                <img src={User} alt="" />
                {
                    user ? <Link onClick={handleLogOut} className='btn btn-primary px-10'>Logout</Link> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>

                }
            </div>
        </div>
    );
};

export default NavBar;