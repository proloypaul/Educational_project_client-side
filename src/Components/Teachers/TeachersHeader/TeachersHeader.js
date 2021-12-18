import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Context/UseAuth';

const TeachersHeader = () => {
    const {head} = UseAuth()
    // console.log(head)
    return (
        <div className='navbar-container'>
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <h1>EklashPurHighSchool</h1>
                    </div>
                    <p className='bar-button'><i className="fas fa-bars"></i></p>
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/allTeacher">All Teachers</Link></li>
                            {head ? <li><Link to="/addHead">Add Head</Link></li>: ''}
                            {head ? <li><Link to="/new Teacher">New Teacher</Link></li>: ''}
                            {head ? <li><Link to="/manageStudents">Manage Students</Link></li>: ''}
                            {head ? <li><Link to="/addNotice">Add Notice</Link></li>: ''}
                        </ul>  
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TeachersHeader;