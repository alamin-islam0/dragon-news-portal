import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import NavBar from '../NavBar';

const NewsPages = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleNews=> singleNews.id == id);
        setNews(newsDetails)
    }, [data, id]);
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsPages;