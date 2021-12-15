import { Container, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';

const Register = () => {
    const { RegisterWithEmailAndPasswrod, error} = UseFirebase()
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()


    const CollectRegisterData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const userAllData = {...userData}
        userAllData[field] = value 
        setUserData(userAllData)
        // console.log(userAllData)
    } 

    const handleRegister = event => {
        event.preventDefault()
        // console.log(userData.password === userData.retypePassword)
        // console.log(userData)
        if(userData.password === userData.retypePassword){
            RegisterWithEmailAndPasswrod(userData.email, userData.password, userData.name, navigate)
            // console.log(userData)
        }

    }
    return (
        <div>
            <Container sx={{my: 10}}>
            <h1>Register section</h1>
                <Paper elevation={12} sx={{py:10}}>
                    <form onSubmit={handleRegister} style={{textAlign: "center"}}>
                        <TextField
                            label="Name"
                            type="text"
                            name="name"
                            onBlur={CollectRegisterData}
                            autoComplete="current-password"
                            style={{width:"60%", marginBottom:"10px"}}
                        />
                        <TextField
                            label="abc@gmail.com"
                            type="email"
                            name="email"
                            onBlur={CollectRegisterData}
                            autoComplete="current-password"
                            style={{width:"60%", marginBottom:"10px"}}
                        />
                        <TextField
                            label="Enter Your Password"
                            type="password"
                            name="password"
                            onBlur={CollectRegisterData}
                            autoComplete="current-password"
                            style={{width:"60%", marginBottom:"10px"}}
                        />
                        <TextField
                            label="Re-type Password"
                            type="password"
                            name="retypePassword"
                            onBlur={CollectRegisterData}
                            autoComplete="current-password"
                            style={{width:"60%", marginBottom:"10px"}}
                        />
                        <p style={{color: "red"}}>{error}</p>
                        <button style={{width:"60%", marginBottom:"10px"}} type="submit">Register</button>
                        <p>Already have an account <Link to="/login">LingIn</Link></p>
                    </form>
                </Paper>
            </Container>
            
        </div>
    );
};

export default Register;