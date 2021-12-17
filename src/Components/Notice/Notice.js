import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import './Notice.css';

const Notice = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Notice Board</h1>
            <Container sx={{my: 10}}>
                <Paper elevation={12} sx={{mx: 5, px: 5, borderRadius:"20px"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <div className='display-noticeContent'>
                                <div>
                                    <h3>Notice Title here</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aut, nihil asperiores corporis et aliquam voluptatum officia laudantium repellat, labore fugiat praesentium neque velit vel cumque repellendus distinctio consequatur perferendis.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className='display-noticeImg'>
                                <img src={''} alt='Empty'/>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default Notice;