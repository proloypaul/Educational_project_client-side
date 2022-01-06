import { Container } from '@mui/material';
import React from 'react';
import './NewTeacher.css';
const NewTeacher = () => {
    return (
        <div className='newTeacherContainer'>
            <Container sx={{py: 10, textAlign:"center"}}>
                <h1>Welcome Teacher Of Our School</h1>
                <div>
                    <from className="teachersFrom">
                        <div className='commonFrom'>
                            <input type="text" placeholder="Teacher Name"/>
                            <input type="text" placeholder="Position"/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Subject Name"/>
                            <input type="text" placeholder="Education"/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Classes"/>
                            <input type="text" placeholder="Day"/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Time"/>
                            <input type="text" placeholder="Salary"/>
                        </div>
                        <div className='teacherImg'>
                            <input type="text" placeholder="Teacher Img host link"/>
                        </div>
                        <div className='teacherAbout'>
                            <textarea placeholder='Describe about teacher'></textarea>
                        </div>
                    </from>
                </div>
            </Container>
        </div>
    );
};

export default NewTeacher;