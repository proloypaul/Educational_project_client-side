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


const ManageStudents = () => {
    const [studentsData, setStudentsData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3800/students`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setStudentsData(data)
            })
    }, [])


    const handleDltBtn = id => {
        const confirmMsg = window.confirm("Are you sure, deleted here admission")
        if(confirmMsg){
            const url = `http://localhost:3800/students/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount){
                        alert("Student Admission deleted successfully!")
                        const withOutClickId = studentsData.filter(user => user._id !== id)
                        setStudentsData(withOutClickId)
                    }
                })
        }else{
            alert("Admission Don't deleleted!")
        }
    }
    return (
        <div>
            <Container sx={{py: 5}}>
                <h1 style={{textAlign: "center", fontWeight:"300"}}>Total Admission {studentsData.length}</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Class</StyledTableCell>
                            <StyledTableCell align="right">EntryYear</StyledTableCell>
                            <StyledTableCell align="right">PSC Result</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Gender</StyledTableCell>
                            <StyledTableCell align="right">PrimarySchool</StyledTableCell>
                            <StyledTableCell align="right">Father's Name</StyledTableCell>
                            <StyledTableCell align="right">Mother's Name</StyledTableCell>
                            <StyledTableCell align="right">Parmanent Address</StyledTableCell>
                            <StyledTableCell align="right">Present Address</StyledTableCell>
                            <StyledTableCell align="right">Payment</StyledTableCell>
                            <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {studentsData.map((row) => (
                            <StyledTableRow key={row._id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.class}</StyledTableCell>
                            <StyledTableCell align="right">{row.entryYear}</StyledTableCell>
                            <StyledTableCell align="right">{row.PscResult}</StyledTableCell>
                            <StyledTableCell align="right">{row.number}</StyledTableCell>
                            <StyledTableCell align="right">{row.gender}</StyledTableCell>
                            <StyledTableCell align="right">{row.primarySchool}</StyledTableCell>
                            <StyledTableCell align="right">{row.fatherName}</StyledTableCell>
                            <StyledTableCell align="right">{row.motherName}</StyledTableCell>
                            <StyledTableCell align="right">{row.parmanetAddress}</StyledTableCell>
                            <StyledTableCell align="right">{row.presentAddress}</StyledTableCell>
                            <StyledTableCell align="right"><Link to={`/payment/${row._id}`}><button>Pay</button></Link></StyledTableCell>
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

export default ManageStudents;