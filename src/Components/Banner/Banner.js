import { Container, Grid } from '@mui/material';
import React from 'react';
import bannerImg from '../../Images/Bg_images/BannerPicOne.jpg'
import bannerImgTwo from '../../Images/Bg_images/BannerPicTwo.jfif'
import './Banner.css';


const Banner = () => {
    
    return (
        <div className='banner-container'>
            <Container>
                <div className='banner-message'>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <div>
                                <div>
                                    <h1>
                                        We are determind to
                                        Achive the highest
                                        Standards
                                    </h1>
                                    <div className='banner-imgTwo'>
                                        <img src={bannerImgTwo} alt='Empty' style={{width: "380px"}}/>
                                    </div>
                                    <div className='bannerBtn'>
                                        <button className='learnBtn'>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className='head-message'>
                                <div>
                                    <div className='banner-img'>
                                        <img src={bannerImg} alt="Empty" style={{width:"200px", height:"200px"}}/>
                                    </div>
                                    <div className='banner-paragraph'>
                                        <div>
                                            <p>A number of parents have taken advantage of this new access to send highly critical messages of advice to teachers about how to do their job and questioning their trainning, skills and competence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Banner;