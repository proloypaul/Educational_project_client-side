import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Allteacher.css';

const Allteacher = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/teachers`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div className='teachers-contianer'> 
            <Container>
                <h1>Total Teachers {teachers.length}</h1>
                <Grid container spacing={2}>
                    {teachers.map(teacher => <Grid key={teacher._id} item sm={4} xs={12}>
                        <div className='teachers'>
                            <p className='teachers-title'>{teacher.teacher}, {teacher.position}</p>
                            <div className='teachers-img'>
                                <img src={teacher.img} alt='Empty!' style={{width: "200px", height: "160px"}}/>
                            </div>
                            <div className='teachers-content'>
                                <p>Subject: {teacher.subject}</p>
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