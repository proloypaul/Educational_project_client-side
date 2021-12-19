import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseAuth from '../../../Context/UseAuth';
import { Container } from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const YourClasses = () => {
    const {user} = UseAuth()
    const [yourClass, setYourClass] = useState([])

    useEffect(() => {
        const url =`https://hidden-beyond-75856.herokuapp.com/classes/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setYourClass(data)
            })
    }, [user?.email])


    const handleDltBtn = (id) => {
      const confirmMsg = window.confirm("Are you sure, to deleted this class")
        if(confirmMsg){
            const url = `https://hidden-beyond-75856.herokuapp.com/classes/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount){
                        alert("Class deleted successfully!")
                        const withOutClickId = yourClass.filter(user => user._id !== id)
                        setYourClass(withOutClickId)
                    }
                })
        }else{
            alert("class Don't deleleted!")
        }

    }
    return (
        <div>
            <Container sx={{py: 5}}>
                <h1 style={{textAlign: "center", fontWeight:"300"}}>Your Classes</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell align="right">Class</StyledTableCell>
                            <StyledTableCell align="right">Subject</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>
                            <StyledTableCell align="right">Day</StyledTableCell>
                            <StyledTableCell align="right">Payment</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {yourClass.map((row) => (
                            <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.email}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.class}</StyledTableCell>
                            <StyledTableCell align="right">{row.subject}</StyledTableCell>
                            <StyledTableCell align="right">{row.time}</StyledTableCell>
                            <StyledTableCell align="right">{row.day}</StyledTableCell>
                            <StyledTableCell align="right"><Link to={`/pay/${row._id}`}><button>Pay</button></Link></StyledTableCell>
                            <StyledTableCell align="right"><button onClick={() => handleDltBtn(row._id)} className="dltBtn"><i className="fas fa-trash-alt"></i></button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            
        </div>
    );
};

export default YourClasses;