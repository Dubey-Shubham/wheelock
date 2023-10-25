import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material/';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';

const Landing = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar isOpen={isSidebarOpen} />
                <Box>
                    <main>
                        <Outlet />
                    </main>
                </Box>
            </Box>
        </>
    )
}

export default Landing