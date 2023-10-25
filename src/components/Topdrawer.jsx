import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import LightIcon from '@mui/icons-material/Light';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export default function Topdrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ marginTop:'90px'}}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsOutlinedIcon sx={{ height: "20px" }} />
                            </ListItemIcon>
                            {/* <Typography sx={{ fontSize: "13px" }}>Configuration</Typography> */}
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "15px", color: "black" }}>Configuration</Typography>
                                }
                               
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/users" style={{ textDecoration: "none" }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleOutlineOutlinedIcon sx={{ height: "20px" }} />
                            </ListItemIcon>
                            {/* <Typography sx={{ fontSize: "13px" }}>Users</Typography> */}
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "15px", color: "black" }}>Users</Typography>
                                }
                               
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/dazzle" style={{ textDecoration: "none" }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HandshakeOutlinedIcon sx={{ height: "20px" }} />
                            </ListItemIcon>
                            {/* <Typography sx={{ fontSize: "13px" }} >Manage Customer</Typography> */}
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "15px", color: "black" }}>Dazzle Rostering</Typography>
                                }
                               
                            />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DomainOutlinedIcon sx={{ height: "20px" }} />
                        </ListItemIcon>
                        {/* <Typography sx={{ fontSize: "13px" }}>Manage Test Requests</Typography> */}
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "15px" }}>Manage Test Requests</Typography>
                            }
                           
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CategoryIcon sx={{ height: "20px" }} />
                        </ListItemIcon>
                        {/* <Typography sx={{ fontSize: "13px" }}>Manage Lab Test</Typography> */}
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "15px" }}>Manage Lab Test</Typography>
                            }
                           
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LightIcon sx={{ height: "20px" }} />
                        </ListItemIcon>
                        {/* <Typography sx={{ fontSize: "13px" }}>New Test Request</Typography> */}
                        {/* <ListItemText primary="Specimen-A Report" sx={{ fontSize: "10px" }} /> */}
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "15px" }}>New Test Request</Typography>
                            }
                           
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleOutlinedIcon sx={{ height: "20px" }} />
                        </ListItemIcon>
                        {/* <Typography sx={{ fontSize: "13px" }}>Report Analysis</Typography> */}

                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: "15px" }}>Report Analysis</Typography>
                            }
                           
                        />

                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* used this box as a button to toggle the top drawer */}
                    <Box onClick={toggleDrawer(anchor, true)} sx={{ '@media (min-width: 1000px)': { display: "none" }, height: "25px", width: "25px", backgroundColor: "rgb(223, 226, 234)", position: "fixed", top: "32px", zIndex: "1", left: "6px", color: "black" }}>
                        <MenuIcon sx={{ color: 'blue', alignItems: "center" }} />
                    </Box>
                    {/* <Button sx={{position:"fixed", top:"70px", zIndex:"1", left:"12px", color:"black"}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}