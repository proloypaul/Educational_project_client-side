import { Container, Grid } from '@mui/material';
import instituteImg from '../../Images/Bg_images/shool_Pic.jpg';
import React from 'react';
import './Institute.css';

const Institute = () => {
    return (
        <div className='institute-container'>
            <h1>Institute Section</h1>
            <Container sx={{py: 5}}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                       <div className='display-noticeContent'>
                        <div>
                            <h4>Know about Us</h4>
                            <p></p>
                        </div>
                       </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                       <div className='display-noticeImg'>
                        <img src={instituteImg} alt='Empty' style={{width: "300px"}}/>
                       </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Institute;