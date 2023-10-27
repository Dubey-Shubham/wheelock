import { React, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../photos/logo.svg'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import Topdrawer from './Topdrawer';

const Navbar = ({ toggleSidebar }) => {

    return (
        <>
            <Box sx={{ flexGrow: 1, height: "90px" }}>
                <AppBar elevation={1} position="fixed" sx={App}>
                    <Toolbar variant="regular">
                        <img src={logo} alt="" style={{height: "68px" }} />
                        <Box sx={{ height: "50px", backgroundColor: "black", width: "3px", marginRight: "20px" }}></Box>
                        <Typography variant="h6" color="inherit" component="div" sx={T1}>
                            Wheelock<br />Scientific<br />Services Ltd
                        </Typography>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ '@media (max-width: 1000px)': { display: "none" }, mr: 2 }} onClick={toggleSidebar} >
                            <Box sx={{ height: "32px", width: "32px", backgroundColor: "rgb(223, 226, 234)", }}>
                                <MenuIcon sx={{ color: 'blue', alignItems: "center", marginTop: "3px" }} />
                            </Box>
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={I1}>
                            <Box sx={{ height: "32px", width: "32px", backgroundColor: "rgb(223, 226, 234)", }}>
                                <NotificationsNoneOutlinedIcon sx={{ color: 'blue', alignItems: "center", marginTop: "3px" }} />
                            </Box>
                        </IconButton>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={I2}>
                            <Box sx={B1}>
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <Box sx={{ height: "32px", width: "32px", backgroundColor: "grey", marginTop: "10px", borderRadius: "100px" }} >
                                        <Typography variant="h6" color="inherit" component="div" sx={{ marginTop: "0px", color: "black", fontSize: "20px" }}>
                                            A
                                        </Typography>
                                    </Box>
                                </Link>
                                <SettingsOutlinedIcon sx={{'@media (max-width: 1000px)': { display: "none" }, color: 'blue', alignItems: "center", marginTop: "14px" }} />
                            </Box>
                        </IconButton>
                        <Box>
                            <Topdrawer />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

const App = {
    height: "90px", 
    justifyContent: "center", 
    backgroundColor: "white", 
    zIndex: (theme) => theme.zIndex.drawer + 1
}
const T1 = {
    lineHeight: "19px", 
    marginRight: "50px", 
    color: "black", 
    fontSize: "15px"
}
const I1 = {
    '@media (max-width: 1000px)': { display: "none" },
    mr: 2, 
    position: "absolute", 
    top: "11px", 
    right: "160px"
}
const I2 = {
    '@media (max-width: 1000px)': {right:"0px", mr: 1}, 
    mr: 2, 
    position: "absolute", 
    top: "8x", 
    right: "30px"
}
const B1 = {
    '@media (max-width: 1000px)': {height: "52px", width: "55px"}, 
    height: "52px", 
    width: "102px", 
    backgroundColor: "rgb(223, 226, 234)", 
    display: "flex", flex: "row", 
    justifyContent: "center", 
    gap: "20px", 
    borderRadius: "30px"
}

export default Navbar

// to change css when screen width changes i have used media queries