import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Date = ({ data, mon, dat }) => {
  // const ww = ` ${dat.day} / ${dat.month}/ ${dat.year}`
  console.log("this is data"+data)
  console.log("this is dat"+dat)

  return (
    <Box sx={Box1}>
      <Typography sx={{
        writingMode: "vertical-rl", // Set text to display vertically from bottom to top
        transform: "rotate(180deg)", // Rotate text to correct orientation
        marginLeft: "0px", // Adjust the margin to position the text
        marginBottom: "10px",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        { data !== undefined ? data + mon : ` ${dat.day} / ${dat.month}/ ${dat.year}`}
        {/* {data + mon}  */}
        {/* {dat.day} / {dat.month} / {dat.year} */}
      </Typography>
      <Box >
        <Link to="/client">
        <Box sx={Box2}> <Typography sx={{ fontWeight: '600' }}>EA2</Typography></Box>
        </Link>
        <Box sx={Box3}><Typography sx={{ fontWeight: '600' }}>01</Typography></Box>
      </Box>
    </Box>
  )
}
const Box1 = {
  height: "7rem", 
  width: "5rem", 
  border: "1px solid grey", 
  display: "flex", 
  flexDirection: "row"
}
const Box2 = {
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
const Box3 = {
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

export default Date