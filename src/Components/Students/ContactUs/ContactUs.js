import { Container } from '@mui/material';
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <h1 style={{fontWeight: "200", textAlign: "center"}}>Contact Us</h1>
            <Container sx={{py: 5}}>
                <div>
                    <div className='contact-form'>
                        <form>
                            <div>
                                <input type="text" placeholder='Name'required/>
                                <input type="email" placeholder='Email' required/>
                            </div>
                            <div>
                                <textarea placeholder='Message'></textarea>
                            </div>
                            <button type='submit' className='loginBtn'>Contact</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;