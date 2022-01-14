import { Container } from '@mui/material';
import React, {useState} from 'react';
import './NewTeacher.css';
const NewTeacher = () => {
    const [teacherData, SetTeacherData] = useState({})

    const handleText = event => {
        const name = event.target.name
        const filed = event.target.value
        let allTeacherData = {...teacherData} 
        allTeacherData[name] = filed;
        SetTeacherData(allTeacherData)

    }
    const hanldeNewTeacher = event => {
        event.preventDefault()
        console.log(teacherData)

        // const url = ``
        // fetch('url', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(teacherData)
        // })

    }
    return (
        <div className='newTeacherContainer'>
            <Container sx={{py: 10, textAlign:"center"}}>
                <h1>Welcome Teacher Of Our institute</h1>
                <div>
                    <from className="teachersFrom" onClick={hanldeNewTeacher}>
                        <div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Teacher Name" name='teacher' onBlur={handleText}/>
                            <input type="text" placeholder="Position" name='position' onBlur={handleText}/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Subject Name" name='subject' onBlur={handleText}/>
                            <input type="text" placeholder="Education" name='education' onBlur={handleText}/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Classes" name='class' onBlur={handleText}/>
                            <input type="text" placeholder="Day" name='day' onBlur={handleText}/>
                        </div>
                        <div className='commonFrom'>
                            <input type="text" placeholder="Time" name='time' onBlur={handleText}/>
                            <input type="text" placeholder="Salary" name='salary' onBlur={handleText}/>
                        </div>
                        <div className='teacherImg'>
                            <input type="text" placeholder="Teacher Img host link" name='img' onBlur={handleText}/>
                        </div>
                        <div className='teacherAbout'>
                            <textarea placeholder='Describe about teacher' name='description' onBlur={handleText}></textarea>
                        </div>
                        <div>
                            <button type='submit' className='newTeacherBtn'>New Teacher</button>
                        </div>
                        </div>
                    </from>
                </div>
            </Container>
        </div>
    );
};

export default NewTeacher;