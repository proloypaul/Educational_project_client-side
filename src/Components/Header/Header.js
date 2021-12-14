import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div>
                    
                </div>
                <div>
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