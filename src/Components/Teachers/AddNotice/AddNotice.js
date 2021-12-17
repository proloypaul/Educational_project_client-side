import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import './AddNotice.css';

const AddNotice = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)

    
    const handleNotice = event => {
        event.preventDefault()
        
        if(!image){
            return;
        }
        // console.log(title, description)
        // console.log(image)
        
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("image", image)
        console.log(formData)



        const url = `https://hidden-beyond-75856.herokuapp.com/notices`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    setSuccess(true)
                }
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div className='notice-container'>
            <Container sx={{py:10}}>
                <form onSubmit={handleNotice}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <div className='notice-content'>
                                <div>
                                    <input type="text" placeholder="Notice Title" onChange={e => setTitle(e.target.value)} className='notice-title'/>
                                </div>
                                <textarea placeholder="Notice Description" onChange={e => setDescription(e.target.value)} className='notice-description'></textarea>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className='notice-img'>
                                <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} className='img-file' required/>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{textAlign: "center" }}>
                        <button type='submit' className='noticeBtn'>Add Notice</button>
                        {success ? <Alert severity="success">Notice Added successfuly!</Alert>: ""}
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddNotice;