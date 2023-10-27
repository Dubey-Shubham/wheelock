import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Paper, Box, Typography, Card, Grid, Divider, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { submitForm, updateFormData } from '../features/formSlice';      // reducer jo ki data ko redux ki centralized state me append karega
import { useNavigate, useLocation } from 'react-router-dom'

const Input = () => {

    // fetching data from fake api and showing

    // const getUserName = async () => {
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
    //     const data = res.data
    //     console.log(data)
    // dispatch(submitData(data))
    // }

    // useEffect(() => {
    //     getUserName();
    //   }, []);


    const dispatch = useDispatch()
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        role: '',
        status: ''
    });


    // taking state for edit data from uselist
    const { state } = useLocation();
    const isEditing = state == null ? false : true
    // console.log(state)
    // console.log(value)

    useEffect(() => {
        if (isEditing) {
            setFormData(state);          //agar state variable me data hai to form me daaldo
        }
    }, []);


    // Function to handle form field changes, so that people can type
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditing) {                      // if state variable has data
                // Dispatch an action to update the existing data
                dispatch(updateFormData(formData));
            } else {
                const url = "https://jsonplaceholder.typicode.com/posts"
                const rep = await axios.post(url, { formData })     // posted the payload the url
                // console.log(rep.data)
                dispatch(submitForm(rep.data.formData))
                // dispatch(submitForm(formData))
                // console.log(formData);
            }

        } catch (error) {
            console.log(error.response)
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            role: '',
            status: ''
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

            <Card style={{ padding: "2px 5px", marginTop: "10px" }}>
                <Typography
                    component="div"
                    sx={T2}
                >
                    Basic Details
                </Typography>
                <Divider sx={{ width: "96%", marginLeft: "30px" }} />
                <form onSubmit={handleSubmit} style={{ margin: "10px 1px 10px 28px" }}>
                    <Grid container spacing={3}>

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                First Name
                            </Typography>
                            <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter first name" variant="outlined" required />
                        </Grid>

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                Last Name
                            </Typography>
                            <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter Last name" variant="outlined" required />
                        </Grid>

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                E-mail Address
                            </Typography>
                            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email Address" variant="outlined" type="email" required />
                        </Grid>

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                Contact Number
                            </Typography>
                            <TextField fullWidth label="Contact" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Enter Contact Number" variant="outlined" type="tel" required />
                        </Grid>

                        <Typography
                            component="div"
                            sx={T3}
                        >
                            Assign Role
                        </Typography>
                        < Divider sx={{ width: "96%", marginLeft: "27px" }} />

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                User Role
                            </Typography>
                            <TextField fullWidth label="User Role" name="role" value={formData.role} onChange={handleInputChange} variant="outlined" required />
                        </Grid>

                        <Grid xs={12} sm={6} md={6} lg={6} item>
                            <Typography
                                component="div"
                                sx={T1}
                            >
                                Status
                            </Typography>
                            <TextField fullWidth label="Status" name="status" value={formData.status} onChange={handleInputChange} variant="outlined" required />
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ marginTop: '20px', display: 'block', marginBottom:"20px", marginLeft:"auto" }}
                        >
                            Submit
                        </Button>

                    </Grid>
                </form>
            </Card>
        </Paper>
    )
}
const T1 = {
      padding: "2px", 
      marginBottom: "0px", 
      fontSize: "15px", 
      fontWeight: "400"
}
const T2 = {
      padding: "2px", 
      marginLeft: "29px", 
      marginBottom: "0px", 
      fontSize: "15px", 
      fontWeight: "500"
}
const T3 = {
      padding: "2px", 
      marginLeft: "24px", 
      marginTop: "15px", 
      fontSize: "15px", 
      fontWeight: "500"
}


export default Input
