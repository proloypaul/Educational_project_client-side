import { Container, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import './Library.css';
const Library = () => {
    const [libraryData, setLibraryData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/library`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLibraryData(data)
            })
    }, [])

    return (
        <div className='library-container'>
            <h1 style={{textAlign: "center", color: "white", fontWeight: "300"}}>LeaRn sOmethIng aNd Earn soMeThinG</h1>
            <Container sx={{py: 5, pb: 10}}>
                <Grid container spacing={2} sx={{textAlign: "center"}}>
                    {libraryData.map(library => <Grid key={library._id} item sm={4} xs={6}>
                        <div className='library-content'>
                            <div>
                                <img src={library.img} alt="Empty!" style={{width: "200px", height:"200px"}}/>
                            </div>
                            <div className='library-title'>
                                <h3>{library.book}</h3>
                            </div>
                        </div>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Library;