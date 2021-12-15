import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Allteacher = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/teachers`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <h1>Total Teachers {teachers.length}</h1>
            <Container>
                <Grid container spacing={2}>
                    {teachers.map(teacher => <Grid key={teacher._id} item sm={4}>
                        <p>{teacher.teacher}</p>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Allteacher;