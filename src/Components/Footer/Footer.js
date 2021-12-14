import { Container, Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <Container className="container" sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3} className="item">
                        <h2>Groups</h2>
                        <ul>
                            <li>Brack</li>
                            <li>BRC</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h2>About</h2>
                        <ul>
                            <li>Institute</li>
                            <li>President</li>
                            <li>Teachers</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h2>Careers</h2>
                        <ul>
                            <li>Successfullier</li>
                            <li>Honesty</li>
                            <li>Etiquette</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className="social"><i className="fab fa-facebook-square"></i><i className="fab fa-twitter-square"></i><i className="fab fa-instagram-square"></i>
                        <p>EklashPurHighSchool &copy; 2021</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;