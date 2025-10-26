import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const AuthLayout = () => {
    return (
        <div>
            <div className='bg-base-200'>
                <header className='w-11/12 mx-auto py-4'>
                <Header></Header>
                <NavBar></NavBar>
            </header>
            </div>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;