import { Alert, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddHead = () => {
    const [headEmail, setHeadEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleBlur = event => {
        setHeadEmail(event.target.value);
    }

    const handleHead = event => {
        event.preventDefault()
        const headTeacher = {email: headEmail}

        // console.log(headTeacher)
        const url = `https://hidden-beyond-75856.herokuapp.com/users/head`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(headTeacher)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.modifiedCount){
                    setSuccess(true)
                }
            })
    }
    return (
        <div>
            <Container className="makeAdmin">
                <h1>Make a Head</h1>
                <form onSubmit={handleHead}>
                <TextField
                    id="standard-password-input"
                    label="abc@gmail.com"
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    sx={{width:"50%"}}
                    autoComplete="current-password"
                    variant="standard"
                />
                <button type="submit" className="loginBtn">Head</button>
                {success ? <Alert severity="success">{headEmail} added as a Head Teacher successfully!</Alert> : <Alert severity="warning">{headEmail} You can't add any head Teacher who don't Register here!</Alert>}
                </form>
            </Container> 
        </div>
    );
};

export default AddHead;