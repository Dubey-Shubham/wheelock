import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import HexagonIcon from '@mui/icons-material/Hexagon';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useSelector, useDispatch } from 'react-redux';                              // redux hook to import data
import { selectFormData, deleteFormEntry } from '../features/formSlice';                 // exporting for data from slice


export default function Userlist() {
    const dispatch = useDispatch()
    const formData = useSelector(selectFormData);       
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ padding: "20px" }}
                >
                    List
                </Typography>
                <Button variant="contained" startIcon={<FilterListIcon />} sx={{ position: 'absolute', right: "180px" }}>
                    Filters
                </Button>
                <Link to="/forms" >
                    <Button variant="contained" startIcon={<AddIcon />} sx={{ position: 'absolute', right: "40px", top: "184px" }}>
                        Add User
                    </Button>
                </Link>
            </Box>
            <Divider />
            <Box height={10} />

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                #
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Name
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                E-mail Address
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Contact No.
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Role
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Status
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)      // spme function to sort entries based on rows per page etc
                            ?.map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="left">{row.firstName} {row.lastName}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.contact}</TableCell>
                                    <TableCell align="left">{row.role}</TableCell>
                                    <TableCell align="left">{row.status}</TableCell>

                                    <TableCell align="left">
                                        <Stack spacing={2} direction="row">
                                            <EditOutlinedIcon
                                                style={{
                                                    fontSize: "20px",
                                                    color: "blue",
                                                    cursor: "pointer",
                                                }}
                                                className="cursor-pointer"
                                            
                                            />
                                            <HexagonIcon
                                                style={{
                                                    fontSize: "20px",
                                                    color: "red",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => dispatch(deleteFormEntry(index))}                               // sending index of corressponding entry in table
                                            />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination                                     // ye pagination hai 
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={formData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
