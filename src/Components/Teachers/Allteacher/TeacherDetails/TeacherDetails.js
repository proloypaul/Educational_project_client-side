import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeacherDetails.css';
const TeacherDetails = () => {
    // const id = useParams()
    // console.log(id)
    const {Id} = useParams()
    const [teacherData, setTeacherData] = useState([])
    useEffect(() => {
        const url = `http://localhost:3800/teachers/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTeacherData(data)
            })
    }, [Id])

    return (
        <div>
            <Container>
            <h1>Teachers Details section</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className='Details'>
                            <div className='Detials-img'>
                                <img src={teacherData.img} alt='Empty!' style={{width: "350px", height: "250px"}}/>
                            </div>
                            <div className='Details-content'>
                                <div className='Details-title'>
                                    <h4>Name: {teacherData.teacher}</h4>
                                    <h4>Education: {teacherData.education}</h4>
                                </div>
                                <div className='Details-title'>
                                    <h4>Position: {teacherData.position}</h4>
                                    <h4>Salary: {teacherData.salary}</h4>
                                </div>
                                <div className='Details-title'>
                                    <h4>Subject: {teacherData.subject}</h4>
                                    <h4>class: {teacherData.class}</h4>
                                </div>
                                <div className='Details-title'>
                                    <h4>Day: {teacherData.day}</h4>
                                    <h4>time: {teacherData.time}</h4>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Yes its okay
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TeacherDetails;