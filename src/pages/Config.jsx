import React from 'react'
import { Box } from '@mui/material/';
import { Grid } from '@mui/material'
import Topbar from '../components/Topbar';
import Cardds from '../components/Cardds';

const Config = () => {
  return (
    <>
      <Box height={657} width={1295} component="main" sx={{ flexGrow: 1, paddingTop: "6px", paddingRight: '15px', paddingLeft: '15px', backgroundColor: "rgb(223, 226, 234)" }}>
        <Topbar value="Configuration" />
        <Box sx={{display:"flex", width:"100%"}}>
          <Grid container spacing={2} >
            <Grid item md={4}>
              <Cardds />
            </Grid>
            <Grid item md={4}>
              <Cardds />
            </Grid>
          </Grid>
        </Box>
      </Box >
    </>
  )
}

export default Config