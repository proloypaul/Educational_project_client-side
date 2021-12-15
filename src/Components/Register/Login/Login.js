import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import UseFirebase from '../../../Hooks/UseFirebase';
import loginImg from '../../../Images/Bg_images/loginImg.png'

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
    const {error, signInWithGoogle} = UseFirebase() 
    const navigate = useNavigate()
    const location = useLocation()

    const handleEmailAndPassword = (event) => {
        event.preventDefault()
    }
    return (
        <div style={{background: "whitesmoke"}}>
            <Container sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3}>
                            <h1 style={{paddingTop:"20px"}}>Login Here Please</h1>
                            <form onSubmit={handleEmailAndPassword}>
                            <TextField
                            label="abc@gmail.com"
                            type="email"
                            autoComplete="current-password"
                            variant="filled"
                            style={{width:"80%", marginBottom:"10px"}}
                            />
                            <TextField
                            label="Enter password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            style={{width:"80%", marginBottom:"10px"}}
                            />
                            <button style={{width:"80%", padding: "8px 0px", fontSize: "16px", fontWeight:"bold"}} type="submit">LogIn</button>
                            </form>
                            
                            <p>{error}</p>
                            <p>Create an Account click here <Link to="/register">Register</Link></p>
                            <button onClick={() => signInWithGoogle(location, navigate)} style={signInGoogleBtn}>Google SignIn</button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={loginImg} alt='Empty' style={{width: "300px"}}/>
                    </Grid>
                </Grid>
            </Container>         
        </div>
    );
};

export default Login;