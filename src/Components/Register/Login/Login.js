import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import loginImg from '../../../Images/Bg_images/loginImg.png'
import UseAuth from '../../../Context/UseAuth';

const signInGoogleBtn = {
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    background:"#000000",
    color: "white",
    border: "0px",
    borderRadius:"5px",
    marginBottom:"15px",
    cursor:"pointer"
}
const Login = () => {
    const {error, signInWithGoogle, loginUsingEmailAndPassword} = UseAuth()
    const [logerData, setLogerData] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const handleEmailAndPassword = (event) => {
        event.preventDefault()
        loginUsingEmailAndPassword(logerData.email, logerData.password, location, navigate)

    }
    const handleLogerData = (event) => {
        // console.log(event.target.value)
        const field = event.target.name;
        const value = event.target.value;
        const logerAllData = {...logerData} 
        logerAllData[field] = value  
        setLogerData(logerAllData)
        // console.log(logerAllData)
    }

    return (
        <div style={{background: "whitesmoke"}}>
            <Container sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{textAlign: "center"}}>
                            <h1 style={{paddingTop:"20px"}}>Login Here Please</h1>
                            <form onSubmit={handleEmailAndPassword}>
                            <TextField
                            label="abc@gmail.com"
                            type="email"
                            name="email"
                            autoComplete="current-password"
                            variant="filled"
                            onBlur={handleLogerData}
                            style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                            label="Enter password"
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            variant="filled"
                            onBlur={handleLogerData}
                            style={{width:"80%", marginBottom:"10px"}}
                            />
                            <button style={{width:"80%"}} type="submit" className='confirmBtn'>LogIn</button>
                            </form>
                            
                            <p style={{color: "red"}}>{error}</p>
                            <p>Create an Account click here <Link to="/register">Register</Link></p>
                            <button onClick={() => signInWithGoogle(location, navigate)} style={signInGoogleBtn}>Google SignIn</button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <img src={loginImg} alt='Empty' style={{width: "300px"}}/>
                    </Grid>
                </Grid>
            </Container>         
        </div>
    );
};

export default Login;