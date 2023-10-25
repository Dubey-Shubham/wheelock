import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import TypeSpecimenOutlinedIcon from '@mui/icons-material/TypeSpecimenOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import LightIcon from '@mui/icons-material/Light';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const drawerWidth = 240;
          

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        display: "block" ,                     //initial display is block
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '@media (max-width: 1000px)': {                   // if display becomes less than 1000px then it will become none and sidebar will disappear
            display: 'none',
          },
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Sidebar({ isOpen }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={isOpen}>
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(!open)}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Box sx={{ overflow: 'auto', marginTop: " 35px", marginLeft: open ? "20px" : "0", fontWeight: "500", width: open ? "auto" : "0", display: isOpen ? "block" : "none" }}>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>Administration</Typography>
                        }
                        sx={{ opacity: open ? 1 : 0 }}
                    />

                </Box>
                <List sx={{ marginTop: isOpen ? '2px' : '20px' }}>
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
                                    sx={{ opacity: open ? 1 : 0 }}
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
                                    sx={{ opacity: open ? 1 : 0 }}
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
                                    sx={{ opacity: open ? 1 : 0 }}
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
                                sx={{ opacity: open ? 1 : 0 }}
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
                                sx={{ opacity: open ? 1 : 0 }}
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
                                sx={{ opacity: open ? 1 : 0 }}
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
                                sx={{ opacity: open ? 1 : 0 }}
                            />

                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <Box sx={{ overflow: 'auto', marginTop: " 15px", marginLeft: open ? "20px" : "0", fontWeight: "500", width: open ? "auto" : "0", display: isOpen ? "block" : "none" }}>
                    <ListItemText
                        primary={
                            <Typography sx={{ fontSize: "15px", fontWeight: "550" }}>Reporting</Typography>
                        }
                        sx={{ opacity: open ? 1 : 0 }}
                    />

                </Box>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TypeSpecimenOutlinedIcon sx={{ height: "20px" }} />
                            </ListItemIcon>
                            {/* <Typography sx={{ fontSize: "13px" }}>Specimen-A Report</Typography> */}
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "15px" }}>Specimen-A Report</Typography>
                                }
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CardMembershipOutlinedIcon sx={{ height: "20px" }} />
                            </ListItemIcon>
                            {/* <Typography sx={{ fontSize: "13px" }}>Certificate Generation</Typography> */}
                            <ListItemText
                                primary={
                                    <Typography sx={{ fontSize: "15px" }}>Certificate Generation</Typography>
                                }
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

        </Box>
    );
}