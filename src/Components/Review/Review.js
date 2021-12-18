import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Review.css';

const Review = () => {
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/reviews`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviewData(data)
            })
    })
    return (
        <div className='review-container'>
            <h1 style={{textAlign:"center", fontWeight: "200"}}>REviEw</h1>
            <Container sx={{py: 5}}>
                <Grid container spacing={2}>
                {reviewData.map(review => <Grid key={review._id} item sm={4} xs={12}>
                        <Paper elevation={12}>
                            <div className='review-box'>
                                <div className='reviewImg-two'>
                                    <img src={`data:image/png;base64,${review.image}`} alt='Empty' style={{width: "200px", height: "150px"}}/>
                                </div>
                                <div className='reviewTitle-two'>
                                    <h3>{review.name}</h3>
                                </div>
                                <div>
                                    <p>{review.description}</p>
                                </div>
                            </div>
                        </Paper>
                </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Review;