import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Allteacher.css';

const Allteacher = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        const url = `https://hidden-beyond-75856.herokuapp.com/teachers`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='teachers-contianer'> 
            <Container sx={{py: 10}}>
                <h1>Teachers</h1>
                <Grid container spacing={2}>
                    {teachers.map(teacher => <Grid key={teacher._id} item sm={4} xs={12}>
                        <div className='teachers'>
                            <p className='teachers-title'>{teacher.teacher}, {teacher.position}</p>
                            <div className='teachers-img'>
                                <img src={teacher.img} alt='Empty!' style={{width: "200px", height: "160px"}}/>
                            </div>
                            <div className='teachers-content'>
                                <h3>Subject: {teacher.subject}</h3>
                                <Link to={`/teacherDetails/${teacher._id}`}><button className='teacherBtn'>Classes</button></Link>
                            </div>
                        </div>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Allteacher;