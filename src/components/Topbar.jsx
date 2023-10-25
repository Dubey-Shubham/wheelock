import React from 'react'
import { Box, Typography } from '@mui/material/';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Topbar = ({value}) => {
    return (
        <Box sx={{ backgroundColor: "white", height: "60px", borderRadius: "4px", marginBottom: '6px', display: 'flex', flexDirection: "row", alignItems: "center" }}>
            <Typography variant="h6" color="inherit" component="div" sx={{ lineHeight: "19px", marginLeft: "20px", color: "black", fontSize: "22px" }}>
                {value}
            </Typography>
            <Box sx={{'@media (max-width: 500px)': {right:"0px"}, position: "absolute", top: "8x", right: "95px" }}>
                <Box sx={{ height: "52px", width: "102px", display: "flex", flex: "row", justifyContent: "center", gap: "10px", borderRadius: "30px" }}>
                    <HomeIcon sx={{alignItems: "center", marginTop: "17px" , height:'17px'}} />
                    <ArrowForwardIosIcon sx={{alignItems: "center", marginTop: "17px" , height:'17px'}} />
                    <Box sx={{ height: "32px", width: "32px", marginTop: "10px", borderRadius: "100px" }} >
                        <Typography variant="h6" color="inherit" component="div" sx={{'@media (max-width: 500px)': {display:"none"}, marginTop: "2px", color: "black", fontSize: "17px" }}>
                            {value}
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Topbar