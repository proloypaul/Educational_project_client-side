import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TeachersHeader = () => {
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
                            <li><Link to="/admission">All Teachers</Link></li>
                            <li><Link to="/library">Add Head</Link></li>
                            <li><Link to="/addReview">New Teacher</Link></li>
                            <li><Link to="/contactUs">Manage Students</Link></li>
                            <li><Link to="/contactUs">Add Notice</Link></li>
                        </ul>  
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TeachersHeader;