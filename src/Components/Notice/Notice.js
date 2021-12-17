import { Container} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DisplayNotice from './DisplayNotice';
import './Notice.css';

const Notice = () => {
    const [noticeData, setNoticeData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/notices`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNoticeData(data)
            })
    }, [])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Notice Board {noticeData.length}</h1>
            <Container sx={{my: 10}}>
                        {
                            noticeData.map(notice => <DisplayNotice key={notice._id} notice={notice}></DisplayNotice>)
                        }
                        {/* <Grid item sm={6} xs={12}>
                            
                            <div className='display-noticeContent'>
                                <div>
                                    <h3>{noticeData.title}</h3>
                                    <p>{noticeData.description}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className='display-noticeImg'>
                                <img src={''} alt='Empty'/>
                            </div>
                        </Grid> */}
            </Container>
        </div>
    );
};

export default Notice;