import {Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import './AddReview.css';

const AddReview = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    // const [success, setSuccess] = useState(false)

    const handleReview = event => {
        event.preventDefault()
        if(!image){
            return;
        }
        // console.log(name, description)
        // console.log(image)
        
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("image", image)
        // console.log(formData)



        // const url = `https://hidden-beyond-75856.herokuapp.com/reviews`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         if(data.insertedId){
        //             setSuccess(true)
        //         }
        //     })
        //     .catch(error => console.log(error.message))

    }
    return (
        <div className='addReview-container'>
            <h1 style={{textAlign:"center", fontWeight:"200", color: "white"}}>Hi, Give uS yOur coMpliMeNt</h1>
            <Container sx={{py:10}}>
                <form onSubmit={handleReview}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={12}>
                            <div className='notice-content'>
                                <div>
                                    <input type="text" placeholder="Enter Your name" onChange={e => setName(e.target.value)} className='notice-title'/>
                                </div>
                                <textarea placeholder="Message" onChange={e => setDescription(e.target.value)} className='notice-description'></textarea>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className='review-content'>
                                <div className='reviewerImg'>
                                    <input accept='image/*' type="file" onChange={e => setImage(e.target.files[0])} required/>
                                    <p>Select Your Image</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{textAlign: "center" }}>
                        <button type='submit' className='reviewBtn'>Add Review</button>
                        {/* {success ? <Alert severity="success">Thank You So Much for your compliment !</Alert>: ""} */}
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddReview;