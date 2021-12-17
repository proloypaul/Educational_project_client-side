import React, {useState} from 'react';
import { Container, Grid} from '@mui/material';
import Alert from '@mui/material/Alert';
import './Admission.css';

const Admission = () => {
    const [admissionData, setAdmissionData] = useState({})
    const [success, setSuccess] = useState(false)

    const collectAdmissionData = event => {
        const field = event.target.name 
        const value = event.target.value 
        const admissionAllData = {...admissionData}
        admissionAllData[field] = value
        setAdmissionData(admissionAllData)
    }

    const handleAdmission = event => {
        event.preventDefault()
        // console.log(admissionData)
        const url = `http://localhost:3800/students`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admissionData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    setSuccess(true)
                }
            })
    }

    return (
        <div className='admission-container'>
            <Container sx={{py: 10}}>
                <form onSubmit={handleAdmission}>
                    <Grid container spacing={2}>
                        <Grid item sm={3} xs={4}>
                            <p className='admission-title'>Year of entry :</p>
                            <p className='admission-title'>Full Name :</p>
                            <p className='admission-title'>Your Email :</p>
                            <p className='admission-title'>Father's Name :</p>
                            <p className='admission-title'>Mother's Name :</p>
                            <p className='admission-title'>Parent Number :</p>
                            <p className='admission-title'>Parmanet Address :</p>
                            <p className='admission-title'>Present Address :</p>
                            <p className='admission-title'>Primary School :</p>
                            <p className='admission-title'>Gender :</p>
                            <p className='admission-title'>Select Class :</p>
                            <p className='admission-title'>PSC Result :</p>
                        </Grid>
                        <Grid item sm={9} xs={8}>
                            <input type="text" placeholder="Date/Month/Year" name="entryYear" onChange={collectAdmissionData} className='inputStyle' required/>
                            <input type="text" placeholder="Enter Your Name" name="name" onChange={collectAdmissionData} className='inputStyle' required/>
                            <input type="email" placeholder="Enter Your Email" name="name" onChange={collectAdmissionData} className='inputStyle' required/>
                            <input type="text" placeholder="Enter Your Father Name" name="fatherName" onChange={collectAdmissionData} className='inputStyle'required/>
                            <input type="text" placeholder="Enter Your Mother Name" name="motherName" onChange={collectAdmissionData} className='inputStyle'required/>
                            <input type="number" placeholder="Enter Your Parent Number" name="number" onChange={collectAdmissionData} className='inputStyle'required/>
                            <input type="text" placeholder="Pos., Upzila, Distic" name="parmanetAddress" onChange={collectAdmissionData} className='inputStyle'required/>
                            <input type="text" placeholder="Pos., Upzila, Distic" name="presentAddress" onChange={collectAdmissionData} className='inputStyle'required/>
                            <input type="text" placeholder="Primary School Name" name="primarySchool" onChange={collectAdmissionData} className='inputStyle'required/>
                            <div className='gender'>
                                <input type="radio" name='gender' value="Male" onChange={collectAdmissionData}/>Male
                                <input type="radio" name='gender' value="Female" onChange={collectAdmissionData}/>Female
                            </div>

                            <select className='selectClass' name="class" onChange={collectAdmissionData}>
                                <option value="six">Which class you want to Admit</option>
                                <option value="six">Six</option>
                                <option value="seven">Seven</option>
                                <option value="eight">Eight</option>
                                <option value="nine">Nine</option>
                                <option value="ten">Ten</option>
                            </select>
                            <div>
                            <select className='selectClass' name="PscResult" onChange={collectAdmissionData}>
                                <option value="message">You result should be around those result</option>
                                <option value="5.00">5.00</option>
                                <option value="4.50">4.50</option>
                                <option value="4.00">4.00</option>
                                <option value="3.50">3.50</option>
                            </select>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{textAlign:"center"}}>
                        <button type='submit' className='submitBtn'>Admit</button>
                    </div>
                    {success ? <Alert severity="success">Your submission done successfuly!</Alert>: ""}
                </form>
            </Container>
        </div>
    );
};

export default Admission;