import { Box, Typography, Grid } from '@mui/material'
import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';

const Dang = () => {

    const [checkedItems, setCheckedItems] = useState([]); // Initialize an empty array for checked items

    const handleChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            // If the checkbox is checked, add the value to the array
            setCheckedItems([...checkedItems, value]);
        } else {
            // If the checkbox is unchecked, remove the value from the array
            setCheckedItems(checkedItems.filter(item => item !== value));
        }
    };
    console.log(checkedItems)
    return (

        <Box sx={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap"}}>
            <Box sx={{ border: "1px solid #a9a8a8", backgroundColor: "yellow", maxWidth: "100%", height: "120px", display: "flex", alignItems: "center" }}>
                <Box sx={{ backgroundColor: "black", borderRadius: "10px", width: "70px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "20px" }}>
                    <Typography sx={{ color: "white", fontSize: "20px" }}>
                        1
                    </Typography>
                </Box>
                <Checkbox
                    value={2}
                    checked={checkedItems.includes(2)} // Check if the value is in the array
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{ marginBottom: "8px" }}
                />
            </Box>
        </Box>

    )
}

export default Dang