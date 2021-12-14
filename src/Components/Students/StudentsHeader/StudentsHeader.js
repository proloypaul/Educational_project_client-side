import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StudentsHeader = () => {
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
                            <li><Link to="/admission">Admission</Link></li>
                            <li><Link to="/library">Library</Link></li>
                            <li><Link to="/addReview">Add Review</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StudentsHeader;