import { Container} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DisplayNotice from './DisplayNotice';
import './Notice.css';

const Notice = () => {
    const [noticeData, setNoticeData] = useState([])

    useEffect(() => {
        const url = `https://hidden-beyond-75856.herokuapp.com/notices`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNoticeData(data)
            })
    }, [])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Notice Board</h1>
            <Container sx={{my: 10}}>
                        {
                            noticeData.map(notice => <DisplayNotice key={notice._id} notice={notice}></DisplayNotice>)
                        }
            </Container>
        </div>
    );
};

export default Notice;