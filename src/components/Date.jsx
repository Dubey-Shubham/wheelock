import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Date = ({ data, mon }) => {
  // console.log(data)

  return (
    <Box sx={{ height: "7rem", width: "5rem", border: "1px solid grey", display: "flex", flexDirection: "row" }}>
      <Typography sx={{
        writingMode: "vertical-rl", // Set text to display vertically from bottom to top
        transform: "rotate(180deg)", // Rotate text to correct orientation
        marginLeft: "0px", // Adjust the margin to position the text
        marginBottom: "1px",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        {data } {mon}
      </Typography>
      <Box >
        <Link to="/client">
        <Box sx={{ backgroundColor: "#84f3d1", height: "1.5rem", width: "2.5rem", border: "2px solid black", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", margin: "12px 0px 0px 0px" }}> <Typography sx={{ fontWeight: '600' }}>EA2</Typography></Box>
        </Link>
        <Box sx={{ backgroundColor: "black", color: 'white', height: "1.5rem", width: "2.5rem", border: "2px solid black", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}><Typography sx={{ fontWeight: '600' }}>01</Typography></Box>
      </Box>
    </Box>
  )
}

export default Date