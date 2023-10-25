import { Box, Typography, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { submitCheck, deleteCheck } from '../features/dazzleSlice';

const Dang = ({ date }) => {
    const wm = date.day
    // console.log(click)

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);
    const [data, setData] = React.useState(null); // Initialize data as null

    const handleChange = (event) => {
        setChecked(event.target.checked);
        const value = parseInt(event.target.value);      // string to number  

        if (event.target.checked) {
            // If the checkbox is checked, add the value to the array
            setData(value);

        } else {
            // If the checkbox is unchecked, remove the value from the array
            setData(null);
        }
    };

    useEffect(() => {
        if (data !== null) {                                // if there is any value in state or checkbox is checked then dispatch it in the store
            dispatch(submitCheck(data));
        } else {                                            // If the checkbox is unchecked or value is removed from state, remove the value from the state                                                       
            // dispatch(deleteCheck(date));
            dispatch(deleteCheck(wm));
        }
    }, [data, dispatch])

    const pez = {
        '@media(max-width: 1262px)': {
            border: "1px solid #a9a8a8",
            width: "132px",
            height: "80px",
            display: "flex",
            alignItems: "center"
        },
        '@media(max-width: 1103px)': {
            border: "1px solid #a9a8a8",
            width: "130px",
            height: "60px",
            display: "flex",
            alignItems: "center"
        },
        '@media(max-width: 779px)': {
            border: "1px solid #a9a8a8",
            width: "107px",
            height: "50px",
            display: "flex",
            alignItems: "center"
        },
        '@media(max-width: 513px)': {
            border: "1px solid #a9a8a8",
            width: "87px",
            height: "35px",
            display: "flex",
            alignItems: "center"
        },
        '@media(max-width: 410px)': {
            border: "1px solid #a9a8a8",
            width: "70px",
            height: "35px",
            display: "flex",
            alignItems: "center"
        },
        border: "1px solid #a9a8a8",
        maxWidth: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center"
    }
    const boxe = {
        '@media(max-width: 779px)': {
            backgroundColor: "black",
            borderRadius: "10px",
            width: "40px",
            height: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px"
        },
        '@media(max-width: 513px)': {
            backgroundColor: "black",
            borderRadius: "10px",
            width: "40px",
            height: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10px"
        },
        '@media(max-width: 410px)': {
            backgroundColor: "black",
            borderRadius: "4px",
            width: "30px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "2px"
        },
        backgroundColor: "black",
        borderRadius: "10px",
        width: "70px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px"
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Box sx={pez}>
                <Box sx={boxe}>
                    <Typography sx={{ color: "white", fontSize: "20px" }}>
                        {date.day}
                        {/* {date} */}
                    </Typography>
                </Box>
                <Checkbox
                    checked={checked}
                    value={wm}
                    // value={date}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{'@media(max-width: 410px)':{marginBottom: "0px"}, marginBottom: "8px" }}
                />
            </Box>
        </Box>
    );
}

export default Dang;
