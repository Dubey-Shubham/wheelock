import React from 'react'
import { Card, Box, CardContent, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Cardds = () => {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography sx={{ fontSize: 14, fontWeight: "550" }} color="text.secondary" gutterBottom>
                            Master Lookup Management
                        </Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="50%"
                            width={38}
                            height={38}
                            boxShadow={3} // Set the elevation level here
                        >
                            <MenuIcon sx={{ color: 'blue', alignItems: "center", marginTop: "3px" }} />
                        </Box>
                    </Box>
                    <Divider sx={{ marginTop: "12px", marginBottom:"20px" }} />
                    <Card elevation={1} sx={{backgroundColor:"rgb(246, 249, 255)"}}>
                        <CardContent>
                        <Typography sx={{ fontSize: 14, fontWeight: "400" }} color="text.secondary" >
                            Master Lookup Management
                        </Typography>
                        <Divider sx={{ marginTop: "2px", marginBottom:"20px" }} />
                        </CardContent>
                    </Card>

                </CardContent>
            </Card>
        </>
    )
}

export default Cardds