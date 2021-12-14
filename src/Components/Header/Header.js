import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='navbar-container'>
            <nav>
                <div className='nav-logo'>
                    <h1>lkfjldkjflkdjfkdjfdkfj</h1>

                </div>
                <div className='nav-bar'>
                    <Link to="/home">Home</Link>
                    <Link to="/institute">Institute</Link>
                    <Link to="/teachers">Teachers</Link>
                    <Link to="/students">Students</Link>
                    <Link to="/notice">Notice</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;