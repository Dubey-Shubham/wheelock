import React, { useState, useEffect } from 'react';
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
import { dataSelector, deleteFormEntry } from '../features/formSlice';                 // exporting for data from slice

import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export default function Userlist() {
    const dispatch = useDispatch()
    const formData = useSelector(dataSelector);
    console.log(formData)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // filter textfield state
    const [nameSearchValue, setNameSearchValue] = useState('');
    const [emailSearchValue, setEmailSearchValue] = useState('');
    const [contactSearchValue, setContactSearchValue] = useState('');
    const [roleSearchValue, setRoleSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // filter function
    const filterData = () => {
        const filtered = formData.filter((row) => {
            const fullName = `${row.firstName} ${row.lastName}`.toLowerCase();         //stored name from formdata in a variable
            const email = row.email.toLowerCase();                                     //also stored value of other variable extracted from store
            const contact = row.contact.toLowerCase();
            const role = row.role.toLowerCase();

            return (
                fullName.includes(nameSearchValue.toLowerCase()) &&          // checking whether names and others fields from store includes searched terms
                email.includes(emailSearchValue.toLowerCase()) &&
                contact.includes(contactSearchValue.toLowerCase()) &&
                role.includes(roleSearchValue.toLowerCase())
            );
        });

        setFilteredData(filtered);
    };

    // effect
    useEffect(() => {
        filterData();
    }, [nameSearchValue, emailSearchValue, contactSearchValue, roleSearchValue, formData]);

    // drawer 
    const [open, setOpen] = useState(false)
    const toggleSearch = () => {
        // Toggle the open state
        setOpen(!open);
    };

    // edit function
    const navigate = useNavigate();
    const handleEditClick = (userData) => {
        navigate(`/forms`, { state: userData })   // navigating to forms after someone clicks edit and also sending state with it
    };



    return (
        // <Box sx={{overflowX: 'auto'}}>
        <Paper sx={{ width: '100%', overflowX: 'auto' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ padding: "20px" }}
                >
                    List
                </Typography>
                <Button variant="contained" startIcon={<FilterListIcon />} onClick={toggleSearch} sx={{'@media (max-width: 600px)':{width:"70px", fontSize:"8px",right: "130px"}, position: 'absolute', right: "180px" }}>
                    Filters
                </Button>
                <Link to="/forms" >
                    <Button variant="contained" startIcon={<AddIcon />} sx={{'@media (max-width: 600px)':{width:"100px", fontSize:"8px", right: "20px", top: "186px"}, position: 'absolute', right: "40px", top: "184px" }}>
                        Add User
                    </Button>
                </Link>
            </Box>
            <Divider />
            <Box height={10} />
            {/* search box */}
            <Box sx={{ backgroundColor: "white", height: "5rem", display: open ? "flex" : "none", alignItems: "center" }}>
                <Box
                    component="form"
                    sx={{
                         margin:"10px", width: '100%', display:"flex", gap:"10px"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Search By Name" variant="outlined" value={nameSearchValue} onChange={(e) => setNameSearchValue(e.target.value)} />
                    <TextField id="outlined-basic" label="Search By email" variant="outlined" value={emailSearchValue} onChange={(e) => setEmailSearchValue(e.target.value)} />
                    <TextField id="outlined-basic" label="Search by Mobile" variant="outlined" value={contactSearchValue} onChange={(e) => setContactSearchValue(e.target.value)} />
                    <TextField id="outlined-basic" label="Search by Role" variant="outlined" value={roleSearchValue} onChange={(e) => setRoleSearchValue(e.target.value)} />
                </Box>
            </Box>
            <Divider />
            <Box style={{ overflowX: 'auto' }}>                    {/*to make table scrollable*/}
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    #
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    Name
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    E-mail Address
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    Contact No.
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    Role
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    Status
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "50px" }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)      // spme function to sort entries based on rows per page etc
                                ?.map((row, index) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align="left">{row.id}</TableCell>
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
                                                    onClick={() => handleEditClick(row)} // Pass the user data to the handler

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
            </Box>
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
