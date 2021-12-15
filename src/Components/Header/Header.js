import { Container } from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase'
import "./Header.css";

const Header = () => {
    const [showBar, setShowBar] = useState(false)

    const {user, signOutProcess} = UseFirebase()
    
    return (
        <div className='navbar-container'>
            <Container>
                <div className='navbar'>
                    <div className='nav-title'>
                        <h1>EklashPurHighSchool</h1>
                    </div>
                    <p className='bar-button' onClick={() => setShowBar(!showBar) }><i className="fas fa-bars"></i></p>
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/institute">Institute</Link></li>
                            <li><Link to="/teachers">Teachers</Link></li>
                            <li><Link to="/students">Students</Link></li>
                            <li><Link to="/notice">Notice</Link></li>
                            <li>{user?.email ? <Link to="/home"><button onClick={signOutProcess}>LogOut</button></Link> : <Link to="/login"><button>LogIn</button></Link>}</li>
                        </ul>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;