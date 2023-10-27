import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const schedule = ({ data }) => {

  const inputDateString = data.$d
  // console.log(data)
  
  // Create a Date object from the input date string
  const date = new Date(inputDateString);
  // Get the day (e.g., "Sun")
  const day = date.toLocaleString("en-US", { weekday: "short" });

  // Get the date in "dd-mm-yy" format
  const formattedDate = date.toLocaleString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  // console.log("Day:", day);
  // console.log("Date (dd-mm-yy):", formattedDate);

  return (
    <Box sx={B1}>
      <Typography sx={{
        writingMode: "vertical-rl", // Set text to display vertically from bottom to top
        transform: "rotate(180deg)", // Rotate text to correct orientation
        marginLeft: "0px", // Adjust the margin to position the text
        marginBottom: "15px",
        fontSize: "13px",
        fontWeight: "bold"
      }}>
        {day}  {formattedDate}
      </Typography>
      <Box >
        <Link to="/client">
        <Box sx={B2}> <Typography sx={{ fontWeight: '600' }}>EA2</Typography></Box>
        </Link>
        <Box sx={B3}><Typography sx={{ fontWeight: '600' }}>01</Typography></Box>
      </Box>
    </Box>
  )
}

const B1 = {
  height: "7rem", 
  width: "5rem", 
  border: "1px solid grey", 
  display: "flex", 
  flexDirection: "row"
}
const B2 = {
  backgroundColor: "#84f3d1", 
  height: "1.5rem", 
  width: "2.5rem", 
  border: "2px solid black", 
  display: 'flex', 
  flexDirection: "column", 
  justifyContent: 'center', 
  alignItems: "center", 
  margin: "12px 0px 0px 0px"
}
const B3 = {
  backgroundColor: "black", 
  color: 'white', 
  height: "1.5rem", 
  width: "2.5rem", 
  border: "2px solid black", 
  display: 'flex', 
  flexDirection: "column", 
  justifyContent: 'center', 
  alignItems: "center"
}

export default schedule