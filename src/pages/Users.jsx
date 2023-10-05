import React, { useState } from 'react'
import { Box } from '@mui/material/';
import Topbar from '../components/Topbar'
import Userlist from '../components/Userlist';

const Users = () => {

  return (
    <>
        <Box height={657} component="main" sx={{ flexGrow: 1, paddingTop: "6px", paddingRight: '15px', paddingLeft: '15px', backgroundColor: "rgb(223, 226, 234)" }}>
          <Topbar value="Users"/>
          <Userlist/>
        </Box>
    </>
  )
}

export default Users