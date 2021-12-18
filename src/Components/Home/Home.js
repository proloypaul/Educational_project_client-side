import React from 'react';
import Banner from '../Banner/Banner';
import Institute from '../Institute/Institute';
import Notice from '../Notice/Notice';
import Header from '../Header/Header'
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Institute></Institute>
            <Notice></Notice> 
            <Review></Review>
        </div>
    );
};

export default Home;