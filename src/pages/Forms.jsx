import React from 'react'
import { Box } from '@mui/material/';
import Input from '../components/Input'
import Topbar from '../components/Topbar'

const Forms = () => {
  return (
    <>
        <Box height={657} component="main" sx={{ flexGrow: 1, paddingTop: "6px", paddingRight: '15px', paddingLeft: '15px', backgroundColor: "rgb(223, 226, 234)" }}>
          <Topbar value="Users"/>
          <Input/>
        </Box>
    </>
  )
}

export default Forms