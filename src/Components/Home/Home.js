import React from 'react';
import Banner from '../Banner/Banner';
import Institute from '../Institute/Institute';
import Notice from '../Notice/Notice';
import Header from '../Header/Header'
import Review from '../Review/Review';
import ContactUs from '../Students/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Institute></Institute>
            <Notice></Notice> 
            <ContactUs></ContactUs>
            <Review></Review>
        </div>
    );
};

export default Home;