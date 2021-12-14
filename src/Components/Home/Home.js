import React from 'react';
import Banner from '../Banner/Banner';
import Institute from '../Institute/Institute';
import Notice from '../Notice/Notice';

const Home = () => {
    return (
        <div>
            <h1>Home section</h1>
            <Banner></Banner>
            <Institute></Institute>
            <Notice></Notice>
        </div>
    );
};

export default Home;