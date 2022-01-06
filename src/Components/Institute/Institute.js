import { Container, Grid } from '@mui/material';
import instituteImg from '../../Images/Bg_images/shool_Pic.jpg';
import React from 'react';
import './Institute.css';

const Institute = () => {
    return (
        <div className='institute-container'>
            <h1 style={{textAlign:"center", fontWeight: "200"}}>InsTiTuTe</h1>
            <Container sx={{py: 5}}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                       <div className='display-noticeContent'>
                        <div>
                            <h2>Know about Us</h2>
                            <p>
                                Describe our Elashpur High School Education system. The second level is High School which incorporates grade 6 to 10. There are both English Medium and Bangla Medium school in Bangladesh. Government prefer Bangla medium schools. Though there are some cadet colleges which are also government owned institutions and they offer English medium studies. Usually, the private schools are offer English medium.
                            </p>
                            <button className='learnBtn'>Learn More</button>
                        </div>
                       </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                       <div className='display-noticeImg'>
                        <img src={instituteImg} alt='Empty' style={{width: "400px", borderRadius: "5px"}}/>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Institute;