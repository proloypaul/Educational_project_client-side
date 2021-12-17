import { Grid, Paper } from '@mui/material';
import React from 'react';

const DisplayNotice = ({notice}) => {
    const {title, description, image} = notice
    return (
        <div>
            <Paper elevation={12} sx={{m: 5, py:5, borderRadius:"20px"}}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <div className='display-noticeContent'>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className='display-noticeImg'>
                            <img src={`data:image/png;base64,${image}`} alt='Empty' style={{width: "200px"}}/>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default DisplayNotice;