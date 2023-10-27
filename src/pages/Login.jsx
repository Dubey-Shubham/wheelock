import React from 'react'
import logo from '../photos/logo.svg'
import { Paper, Box, Typography, Grid, Button, TextField, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <Box sx={Box1}>
      <Paper sx={Paper1}>
        <Box sx={Box2}>
          <img src={logo} alt="" style={{ height: "72px" }} />
          <Box sx={{ height: "52px", backgroundColor: "black", width: "3px", marginRight: "20px" }}></Box>
          <Typography sx={{ lineHeight: "19px", marginRight: "50px", color: "black", fontSize: "19px", fontWeight: "700" }}>
            Wheelock<br />Scientific<br />Services Ltd
          </Typography>
        </Box>
        <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
          <Typography sx={{ lineHeight: "19px", color: "black", fontSize: "15px", fontWeight: "550" }}>
            Enter your credentials to sign-in
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ justifyContent: "center", display: "flex", flexDirection: "row" }}>
            <Grid container spacing={3} sx={{ justifyContent: "center", display: "flex", flexDirection: "row", }}>
              <Grid xs={12} sm={12} md={12} item sx={{marginLeft:"20px"}}>
                <Typography
                  component="div"
                  sx={Typo1}
                >
                  Username
                </Typography>
                <TextField style={{ width: "100%" }} name="firstName" placeholder="Enter Username" variant="outlined" required />
              </Grid>
              <Grid xs={12} sm={12} md={12} item sx={{marginLeft:"20px"}}>
                <Typography
                  component="div"
                  sx={Typo1}
                >
                  Password
                </Typography>
                <TextField style={{ width: "100%" }} name="firstName" placeholder="Password" variant="outlined" required />
              </Grid>
            </Grid>
          </Box>
          <Box sx={Box3}>
            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
              <Checkbox {...label} />
              <Typography>Keep me logged in</Typography>
            </Box>
            <Typography sx={{color:"rgb(52, 130, 238)"}}>Forgot Password?</Typography>
          </Box>
          <Button type="submit" variant="contained" sx={{ width: " 90%", margin:"0px 0px 25px 18px" }} >Sign In</Button>
        </form>
      </Paper>
    </Box>
  )

}

const Box1 = {
  backgroundColor: "rgb(52, 130, 238)", 
  height: "100vh", 
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "center", 
  alignItems: "center"
}
const Paper1 = {
  '@media (max-width: 610px)': {width: '78%'},
  '@media (min-width: 610px) and  (max-width: 1100px)': {width: '48%'}, 
  width: '28%', 
  overflow: 'hidden', 
  justifyContent: "center", 
  display: "flex", 
  flexDirection: "column", 
  padding: "20px", 
  gap: "10px" 
}
const Box2 ={
  display: "flex", 
  alignItems: "center", 
  justifyContent: 'center', 
  marginBottom:"25px", 
  marginTop:"30px"
}
const Typo1 = {
  padding: "2px", 
  marginLeft: "0px", 
  marginBottom: "0px", 
  fontSize: "15px", 
  fontWeight: "400"
}
const Box3 = {
  alignItems: "center", 
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "space-between", 
  margin:"25px 22px 25px 10px"
}

export default Login