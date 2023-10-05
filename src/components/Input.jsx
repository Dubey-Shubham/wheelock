import React, { useState } from 'react'
import { Paper, Box, Typography, Card, Grid, Divider, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { submitForm} from '../features/formSlice';      // reducer jo ki data ko redux ki centralized state me append karega
import { useNavigate } from 'react-router-dom'

const Input = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();
    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        role: '',
    });

    // Function to handle form field changes, so that people can type
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(submitForm(formData))

        // console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            role: '',
            status:''
        })
        navigate("/users")
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ padding: "20px", marginLeft: "14px", marginBottom: "0px" }}
                >
                    Add New User
                </Typography>
            </Box>
            <Divider />

            <Card style={{ padding: "2px 5px", marginTop: "10px", height: "65vh" }}>
                <Typography
                    component="div"
                    sx={{ padding: "2px", marginLeft: "29px", marginBottom: "0px", fontSize: "15px", fontWeight: "500" }}
                >
                    Basic Details
                </Typography>
                <Divider sx={{ width: "96%", marginLeft: "30px" }} />
                <form onSubmit={handleSubmit} style={{ margin: "10px 1px 10px 28px" }}>
                    <Grid container spacing={3}>

                        <Grid md={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                First Name
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter first name" variant="outlined" required />
                        </Grid>

                        <Grid md={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                Last Name
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter Last name" variant="outlined" required />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                E-mail Address
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="Email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email Address" variant="outlined" type="email" required />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                Contact Number
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="Contact" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Enter Contact Number" variant="outlined" type="tel" required />
                        </Grid>

                        <Typography
                            component="div"
                            sx={{ padding: "2px", marginLeft: "24px", marginTop: "15px", fontSize: "15px", fontWeight: "500" }}
                        >
                            Assign Role
                        </Typography>
                        < Divider sx={{ width: "96%", marginLeft: "27px" }} />

                        <Grid xs={12} sm={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                User Role
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="User Role" name="role" value={formData.role} onChange={handleInputChange} variant="outlined" required />
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <Typography
                                component="div"
                                sx={{ padding: "2px", marginLeft: "0px", marginBottom: "0px", fontSize: "15px", fontWeight: "400" }}
                            >
                                Status
                            </Typography>
                            <TextField style={{ width: "37.5rem" }} label="Status" name="status" value={formData.status} onChange={handleInputChange} variant="outlined" required />
                        </Grid>
                        
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ position: "absolute", right: "50px", bottom: "50px" }}
                            >
                                Submit
                            </Button>
                    
                    </Grid>
                </form>
            </Card>
        </Paper>
    )
}

export default Input