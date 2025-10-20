import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-4'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-4'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-4 grid grid-cols-12'>
                <aside className='col-span-3 pr-22'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet>

                    </Outlet>
                </section>
                <aside className='col-span-3 pl-10'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;