import { Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import './TeacherDetails.css';
import UseAuth from '../../../../Context/UseAuth';

const TeacherDetails = () => {
    const {user} = UseAuth()
    const initialClassData = {name: user.displayName, email: user.email, class: '', subject: '', day: ''}
    // const id = useParams()
    // console.log(id)
    const {Id} = useParams()
    const [teacherData, setTeacherData] = useState([])
    const [classData, setClassData] = useState(initialClassData)
    const [success, setSuccess] = useState(false)
    
    useEffect(() => {
        const url = `http://localhost:3800/teachers/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTeacherData(data)
            })
    }, [Id])

    const CollectClassData = event => {
        const field = event.target.name 
        const value = event.target.value 
        const allClassData = {...classData}
        allClassData[field] = value 
        setClassData(allClassData)
    }
    const handleClass = event => {
        event.preventDefault()
        console.log(classData)
        const classAllData = {
            ...classData,
            time: teacherData.time,
            date: new Date().toLocaleDateString()
        }
        // console.log(classAllData)
        const url = `http://localhost:3800/classes`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(classAllData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    setSuccess(true)
                }
            })
    }

    return (
        <div>
            <h1>Teachers Details section</h1>
            <Container sx={{my: 10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div className='Details'>
                            <div className='Detials-img'>
                                <img src={teacherData.img} alt='Empty!' style={{width: "350px", height: "250px"}}/>
                            </div>
                            <div className='Details-content'>
                                <div className='Details-title'>
                                    <p>
                                    <span className='title'>Name: </span> {teacherData.teacher}
                                    </p>
                                    <p>
                                    <span className='title'>Education: </span> {teacherData.education}
                                    </p>
                                </div>
                                <div className='Details-title'>
                                    <p>
                                    <span className='title'>Position: </span> {teacherData.position}
                                    </p>
                                    <p>
                                    <span className='title'>Salary: </span> {teacherData.salary}
                                    </p>
                                </div>
                                <div className='Details-title'>
                                    <p>
                                    <span className='title'>Subject: </span> {teacherData.subject}
                                    </p>
                                    <p>
                                    <span className='title'>Class: </span> {teacherData.class}
                                    </p>
                                </div>
                                <div className='Details-title'>
                                    <p>
                                    <span className='title'>Day: </span> {teacherData.day}
                                    </p>
                                    <p>
                                    <span className='title'>Time: </span> {teacherData.time}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{display: "flex", alignItems:"center"}}>
                        <form onSubmit={handleClass} style={{textAlign: "center"}}>
                            <TextField
                                label="Name"
                                // defaultValue={user.displayName}
                                type="text"
                                name="name"
                                onBlur={CollectClassData}
                                autoComplete="current-password"
                                style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                                label="abc@gmail.com"
                                // defaultValue={user.email}
                                type="email"
                                name="email"
                                onBlur={CollectClassData}
                                autoComplete="current-password"
                                style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                                label="Enter Your Class"
                                type="text"
                                name="class"
                                onBlur={CollectClassData}
                                autoComplete="current-password"
                                style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                                label={`Subject: ${teacherData.subject}`}
                                type="text"
                                name="subject"
                                onBlur={CollectClassData}
                                autoComplete="current-password"
                                style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                                label={`Day: ${teacherData.day}`}
                                type="text"
                                name="day"
                                onBlur={CollectClassData}
                                autoComplete="current-password"
                                style={{width:"80%", marginBottom:"10px"}}
                            />
                            <button type='submit' style={{width:"80%", marginBottom:"10px"}}>Confirm Class</button>
                            {success ? <Alert severity="success">Your Class Confirm </Alert>: ""}
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TeacherDetails;