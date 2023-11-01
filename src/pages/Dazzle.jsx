import { Box, Paper, Typography, Button, Grid, Divider } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Modal from '@mui/material/Modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Schedule from '../components/schedule'
import CustomDate from '../components/Date';
import AddIcon from '@mui/icons-material/Add';

import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { dazSelector } from '../features/dazzleSlice';
import { dangSelector } from '../features/dangSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './Dazzle.css'
import Dang from '../components/Dang';
import DangC from '../components/DangC';

const Dazzle = () => {


  const [openModal3, setOpenModal3] = React.useState(false);
  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  const [openModal4, setOpenModal4] = React.useState(false);
  const handleOpenModal4 = () => setOpenModal4(true);
  const handleCloseModal4 = () => setOpenModal4(false);

  const arr = useSelector(dazSelector)
  const vrr = useSelector(dangSelector) 
  const val = openModal3 === false ? arr.slice().sort((a, b) => a - b) : [1]            //Array.sort sorts the array in-place, meaning it attempts to mutate the array that is why we also used slice which return a new array (nahi to error ayega)
  // const wal = openModal3 === false ? vrr.slice().sort((a, b) => a - b) : [1]            //Array.sort sorts the array in-place, meaning it attempts to mutate the array that is why we also used slice which return a new array (nahi to error ayega)
  // array of date sabhi sort hoga jab openmodal3 ki value false hai matlab modal close hai
  const wal = openModal4 === false
  ? vrr.slice().sort((a, b) => {
      const dateA = new Date(a.year, a.month, a.day);
      const dateB = new Date(b.year, b.month, b.day);
      return dateA - dateB;
    })
  : [1];      //otherwise return  1 

  // console.log(wal)

  // this is to control selectbox in c3
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // modal open close (all modal)
  const [openModal1, setOpenModal1] = React.useState(false);
  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const [openModal2, setOpenModal2] = React.useState(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  // calender logic inside modal 2
  const [value, setValue] = useState(dayjs('2022-04-01'));
  const [valuetwo, setValuetwo] = useState(dayjs('2022-04-02'));
  const startDate = value;
  const endDate = valuetwo;
  const days = [];                              //calculated days between 2 selected days
  let currentDate = startDate;
  while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
    days.push(currentDate);
    currentDate = currentDate.add(1, 'day');
  }
  // console.log(days)


  // modal 3 logic, checkbox and left/right shift 
  const [selectedMonth, setSelectedMonth] = useState(new Date());       // store current date

  const changeMonth = (delta) => {                   // this function will update the state above based on right/left shifts clicked
    const newDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + delta);       //newDate will store current year, current month and also updated month/year

    // Check if the new month is December and increase the year by 1
    if (newDate.getMonth() === 12) {
      newDate.setFullYear(newDate.getFullYear() + 1);
    }

    setSelectedMonth(newDate);
  };
  // console.log("hello" + tday)

  // function to find days in a month
  function getDaysInMonthArray() {
    const today = selectedMonth // Get the current date
    const year = today.getFullYear(); // Get the current year
    const month = today.getMonth(); // Get the current month (0-11, where 0 is January)

    // Create a new Date object for the first day of the current month
    const firstDayOfMonth = new Date(year, month, 1);

    // Create a new Date object for the last day of the current month
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = [];
    let currentDay = firstDayOfMonth;

    while (currentDay <= lastDayOfMonth) {
      const dateObject = {
        day: currentDay.getDate(),
        month: currentDay.getMonth() + 1, // Adding 1 because months are 0-based
        year: currentDay.getFullYear(),
        completeDate: currentDay.toDateString(),
      };
      daysInMonth.push(dateObject);
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return daysInMonth;
  }

  const amss = getDaysInMonthArray()
  const moyr = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(selectedMonth)
  // console.log(moyr)

  // finding all the 35 days of calender
  function getDaysInMonths() {
    const today = selectedMonth // Useing the selected month
    const year = today.getFullYear();
    const month = today.getMonth();

    // Create a new Date object for the first day of the current month
    const firstDayOfMonth = new Date(year, month, 1);

    // Create a new Date object for the last day of the current month
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Calculate the number of days in the current month
    const daysInMonth = lastDayOfMonth.getDate();

    // Calculate the day of the week for the first day of the month (0-6, where 0 is Sunday)
    const theday = firstDayOfMonth.getDay();
    // increasing the day by one (1-7)
    const startDayOfWeek = theday === 0 ? 7 : theday

    // Create an array to hold the days for the calendar
    const calendarArray = [];
    // array to hold days month year 
    const calArray = [];

    // Calculate the number of days to add from the previous month to make it 35 days
    const daysFromPrevMonth = startDayOfWeek === 1 ? 0 : startDayOfWeek - 1;

    const prevMonth = new Date(year, month, 0); // Last day of the previous month (complete date)
    const daysInPrevMonth = prevMonth.getDate();    // extracting only date from entire dd/mm/yy
    //console.log("prev month" + prevMonth)
    //console.log("days in prev month" + daysInPrevMonth)

    for (let i = daysInPrevMonth - daysFromPrevMonth + 1; i <= daysInPrevMonth; i++) {     // looping last days of previous month to fill intials of 35 days
      calendarArray.push(i);
      calArray.push({
        index: i+month,
        day: i,
        month: month,
        year: year,
      });
    }

    // Add the days of the current month (all 31)
    for (let i = 1; i <= daysInMonth; i++) {
      calendarArray.push(i);
      calArray.push({
        index: i+month,
        day: i,
        month: month + 1,
        year: year,
      });
    }

    // Calculate the number of days to add from the next month to make it 35 days
    const daysFromNextMonth = 35 - calendarArray.length;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      calendarArray.push(i);
      calArray.push({
        index: i+month,
        day: i,
        month: month + 2,
        year: year,
      });
    }

    return calArray;
  }
  const bmss = getDaysInMonths()
  // console.log(bmss)



  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] // Array to store checkbox values

  return (
    <Box sx={{ backgroundColor: "#f3f0f0" }}>
      <Paper elevation={1} sx={Paper1}>
        <Typography sx={{ fontSize: "22px", fontWeight: "500", marginLeft: "20px" }}>
          Dazzle - Intelligent rostering optimiser
        </Typography>
      </Paper>

      {/* c2 */}
      <Paper elevation={1} className='paper2'>
        <Typography sx={T1}>
          Dazzle Test 23 Oct 2023 -19 Nov 2023
        </Typography>
        <Button variant="contained" onClick={handleOpenModal1} startIcon={<SaveIcon />} sx={B1}>
          Update Planner
        </Button>
        {/* modal that will pop up on clicking box above */}
        <Modal
          open={openModal1}
          onClose={handleCloseModal1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* this is the calender inside this modal */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  label="Pick Start Date"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
                <DatePicker
                  label="Pick End Date"
                  value={value}
                  onChange={(tValue) => setValuetwo(tValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Modal>
        <Link to="/">
          <Button variant="contained" startIcon={<SettingsBackupRestoreIcon />} sx={B2}>
            Back
          </Button>
        </Link>
      </Paper>

      {/* c3 */}
      <Paper elevation={1} sx={P1}>
        <FormControl sx={{ width: "50%", position: "absolute", left: "15px" }}>
          <InputLabel id="demo-simple-select-label" sx={{ fontSize: "15px", fontWeight: "500" }}>Dazzle One</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ height: "35px" }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" startIcon={<SettingsSuggestIcon />} sx={B3}>
          Solve
        </Button>
      </Paper>

      {/* c4 */}
      <Paper elevation={1} sx={P2}>
        <Button variant="contained" sx={B4}>
          <KeyboardArrowLeftIcon />
        </Button>
        <Typography sx={{ '@media(max-width: 640px)': { fontSize: "12px" }, fontSize: "18px", fontWeight: "500" }}>
          23 Oct 2023 -18 Nov 2023
        </Typography>

        <Button variant="contained" sx={B4}>
          <ChevronRightIcon />
        </Button>
      </Paper>

      {/* c 5 */}
      <Paper elevation={1} sx={Paper2}>

        {/* box with icon and all the schedule cards */}
        <Box sx={B5}>
          <Box onClick={handleOpenModal2} sx={B6} >
            <CalendarMonthIcon />
          </Box>
          <Modal
            open={openModal2}
            onClose={handleCloseModal2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={dimn}>
              <Typography id="modal-modal-title" sx={{ fontSize: "20px" }}>
                Rotation Cycle
              </Typography>
              <Divider />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControl sx={{ '@media(max-width: 1250px)': { marginTop: "10px" }, width: "43%", marginTop: "60px" }}>
                  <InputLabel id="demo-simple-select-label" sx={{ fontSize: "15px", fontWeight: "500" }}>Select employee</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Typography sx={{ fontSize: "20px", marginTop: "10px" }}>
                  Rotation Cycle Days
                </Typography>
                <Typography sx={{ margin: "10px, 0px" }}>
                  Rotation Cycle Days:   Assigned Hours:0   Unassigned Hours:0
                </Typography>
                <Button variant="contained" startIcon={<AddIcon />} sx={B7}>
                  Assign Shifts
                </Button>
              </Box>
              <TableContainer component={Paper}>
                <Table >
                  <TableBody sx={{ display: "flex", flexDirection: "column" }}>

                    <TableRow>
                      <TableCell sx={taabl}>Week 1</TableCell>
                      <TableCell sx={tabl}>1</TableCell>
                      <TableCell sx={tabl}>2</TableCell>
                      <TableCell sx={tabl}>3</TableCell>
                      <TableCell sx={tabl}>4</TableCell>
                      <TableCell sx={tabl}>5</TableCell>
                      <TableCell sx={tabl}>6</TableCell>
                      <TableCell sx={taabbl}>7</TableCell>
                    </TableRow>

                    <TableRow>

                      <TableCell sx={taabl}>Week 2</TableCell>
                      <TableCell sx={tabl}>8</TableCell>
                      <TableCell sx={tabl}>9</TableCell>
                      <TableCell sx={tabl}>10</TableCell>
                      <TableCell sx={tabl}>11</TableCell>
                      <TableCell sx={tabl}>12</TableCell>
                      <TableCell sx={tabl}>13</TableCell>
                      <TableCell sx={taabbl}>14</TableCell>

                    </TableRow>
                    <TableRow>

                      <TableCell sx={taabl}>Week 3</TableCell>
                      <TableCell sx={tabl}>15</TableCell>
                      <TableCell sx={tabl}>16</TableCell>
                      <TableCell sx={tabl}>17</TableCell>
                      <TableCell sx={tabl}>18</TableCell>
                      <TableCell sx={tabl}>19</TableCell>
                      <TableCell sx={tabl}>20</TableCell>
                      <TableCell sx={taabbl}>21</TableCell>

                    </TableRow>
                    <TableRow>

                      <TableCell sx={{ border: "1px solid #969292", width: "50px", backgroundColor: "#f5a543" }}>Week 4</TableCell>
                      <TableCell sx={abl}>22</TableCell>
                      <TableCell sx={abl}>23</TableCell>
                      <TableCell sx={abl}>24</TableCell>
                      <TableCell sx={abl}>25</TableCell>
                      <TableCell sx={abl}>26</TableCell>
                      <TableCell sx={abl}>27</TableCell>
                      <TableCell sx={abl}>28</TableCell>

                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" sx={B8}>
                Close
              </Button>
              <Button variant="contained" startIcon={<AddIcon />} sx={B9}>
                Save Rotation
              </Button>
            </Box>
          </Modal>
        </Box>

        {/* mapping compo in this boz */}
        <Box sx={{ display: "flex", overflowX: "auto", maxWidth: "100%" }}>
          {days.map((card) =>
            <Schedule data={card} />)}
        </Box>
      </Paper>

      {/* modal with tickbox */}
      <Paper elevation={1} sx={Paper3}>
        {/* box with icon and all the schedule cards */}
        <Box sx={B11}>
          <Box onClick={handleOpenModal3} sx={B12} >
            <CalendarMonthIcon />
          </Box>
          <Modal
            open={openModal3}
            onClose={handleCloseModal3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={zod}>
              <Typography id="modal-modal-title" sx={{ '@media(max-width: 513px)': { fontSize: "18px", marginBottom: "2px" }, fontSize: "30px", marginBottom: "10px" }}>
                Assign Shift(s)
              </Typography>
              <Divider sx={{ border: "1px solid #a9a8a8" }} />
              <Box sx={{ '@media(max-width: 513px)': { padding: "2px 10px" }, padding: "05px 10px", backgroundColor: "#d5d3d3", display: "flex", justifyContent: "center" }}>
                <Button variant="contained" onClick={() => changeMonth(-1)} sx={{ '@media(max-width: 513px)': { height: "18px" }, height: "28px", width: "1px", color: 'black', backgroundColor: "#6dd0b2" }}>
                  <KeyboardArrowLeftIcon />
                </Button>
                <Typography sx={{ '@media(max-width: 640px)': { fontSize: "12px" }, fontSize: "18px", fontWeight: "500" }}>
                  {moyr}
                </Typography>

                <Button variant="contained" onClick={() => changeMonth(1)} sx={{ '@media(max-width: 513px)': { height: "18px" }, height: "28px", width: "1px", color: 'black', backgroundColor: "#6dd0b2" }}>
                  <ChevronRightIcon />
                </Button>
              </Box>
              <Typography sx={{ '@media(max-width: 513px)': { fontSize: "15px", padding: "0px 10px" }, padding: "2px 10px", fontSize: "20px", backgroundColor: "#d5d3d3" }}>
                Days
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {amss.map((card) =>
                  <Dang date={card} />
                )}
              </Box>
              <Button onClick={handleCloseModal3} sx={{ width: "20px", marginTop: "5px", float: "right", backgroundColor: "#6dd0b2", color: "black" }}>Submit</Button>
            </Box>
          </Modal>
        </Box>

        {/* mapping compo in this boz */}
        <Box sx={{ display: "flex", overflowX: "auto", maxWidth: "100%" }}>
          {val.map((Bard) =>
            <CustomDate data={Bard} mon={moyr} />)}
        </Box>
      </Paper>

      {/* modal with calender */}
      <Paper elevation={1} sx={Paper3}>
        {/* box with icon and all the schedule cards */}
        <Box sx={B11}>
          <Box onClick={handleOpenModal4} sx={B12} >
            <CalendarMonthIcon />
          </Box>
          <Modal
            open={openModal4}
            onClose={handleCloseModal4}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={mod}>
              <Typography id="modal-modal-title" sx={{ '@media(max-width: 513px)': { fontSize: "18px", marginBottom: "2px" }, fontSize: "30px", marginBottom: "10px" }}>
                Assign Shift(s)
              </Typography>
              <Divider sx={{ border: "1px solid #a9a8a8" }} />
              <Box sx={{ '@media(max-width: 513px)': { padding: "2px 10px" }, padding: "05px 10px", backgroundColor: "#d5d3d3", display: "flex", justifyContent: "center" }}>
                <Button variant="contained" onClick={() => changeMonth(-1)} sx={{ '@media(max-width: 513px)': { height: "18px" }, height: "28px", width: "1px", color: 'black', backgroundColor: "#6dd0b2" }}>
                  <KeyboardArrowLeftIcon />
                </Button>
                <Typography sx={{ '@media(max-width: 640px)': { fontSize: "12px" }, fontSize: "18px", fontWeight: "500" }}>
                  {moyr}
                </Typography>

                <Button variant="contained" onClick={() => changeMonth(1)} sx={{ '@media(max-width: 513px)': { height: "18px" }, height: "28px", width: "1px", color: 'black', backgroundColor: "#6dd0b2" }}>
                  <ChevronRightIcon />
                </Button>
              </Box>
              <Typography sx={{ '@media(max-width: 513px)': { fontSize: "15px", padding: "0px 10px" }, padding: "2px 10px", fontSize: "20px", backgroundColor: "#d5d3d3" }}>
                Days
              </Typography>

              <TableContainer component={Paper}>
                <Table >
                  <TableBody sx={{ display: "flex", flexDirection: "column" }}>

                    <TableRow>

                      <TableCell sx={tabl}>Monday</TableCell>
                      <TableCell sx={tabl}>Tuesday</TableCell>
                      <TableCell sx={tabl}>Wednesday</TableCell>
                      <TableCell sx={tabl}>Thursday</TableCell>
                      <TableCell sx={tabl}>Friday</TableCell>
                      <TableCell sx={tabl}>Saturday</TableCell>
                      <TableCell sx={taabbl}>Sunday</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={tabl}> <DangC date={bmss[0]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[1]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[2]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[3]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[4]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[5]} /> </TableCell>
                      <TableCell sx={taabbl}> <DangC date={bmss[6]} /> </TableCell>
                    </TableRow>

                    <TableRow>

                      <TableCell sx={tabl}> <DangC date={bmss[7]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[8]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[9]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[10]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[11]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[12]} /> </TableCell>
                      <TableCell sx={taabbl}> <DangC date={bmss[13]} /> </TableCell>

                    </TableRow>
                    <TableRow>

                      <TableCell sx={tabl}> <DangC date={bmss[14]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[15]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[16]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[17]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[18]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[19]} /> </TableCell>
                      <TableCell sx={taabbl}> <DangC date={bmss[20]} /> </TableCell>

                    </TableRow>
                    <TableRow>

                      <TableCell sx={tabl}> <DangC date={bmss[21]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[22]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[23]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[24]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[25]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[26]} /> </TableCell>
                      <TableCell sx={taabbl}> <DangC date={bmss[27]} /> </TableCell>

                    </TableRow>
                    <TableRow>

                      <TableCell sx={tabl}> <DangC date={bmss[28]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[29]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[30]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[31]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[32]} /> </TableCell>
                      <TableCell sx={tabl}> <DangC date={bmss[33]} /> </TableCell>
                      <TableCell sx={taabbl}> <DangC date={bmss[34]} /> </TableCell>

                    </TableRow>
                    {bmss.length >= 36 && (
                      <TableRow >
                        <TableCell sx={tabl}> {bmss[35] !== undefined && ( <DangC date={bmss[35]}/> )} </TableCell>
                        <TableCell sx={tabl}> {bmss[36] !== undefined && ( <DangC date={bmss[36]}/> )} </TableCell>
                        <TableCell sx={tabl}> {bmss[37] !== undefined && ( <DangC date={bmss[37]}/> )} </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button onClick={handleCloseModal4} sx={{ width: "20px", marginTop: "5px", float: "right", backgroundColor: "#6dd0b2", color: "black" }}>Submit</Button>
            </Box>
          </Modal>
        </Box>

        {/* mapping compo in this cusdate */}
        <Box sx={{ display: "flex", overflowX: "auto", maxWidth: "100%" }}>
          {wal.map((Bard) =>
            <CustomDate dat={Bard} />)}
        </Box>
      </Paper>
    </Box>
  )
}

//style of modal 1
const style = {
  '@media(max-width: 1190px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "35%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};
// style of modal 2
const dimn = {
  '@media(max-width: 1245px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75%",
    height: "550px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  height: "570px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};
// style of modal 3
const mod = {
  '@media(max-width: 1262px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "85%",
    height: "575px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  '@media(max-width: 513px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "65%",
    height: "510px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "65%",
  height: "580px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: "20px"
};
const zod = {
  '@media(max-width: 1262px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "85%",
    height: "575px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  '@media(max-width: 513px)': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "65%",
    height: "510px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "87%",
  height: "580px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: "20px"
};

const Paper1 = {
  backgroundColor: "black",
  color: "white",
  height: "4rem",
  display: "flex",
  alignItems: "center",
  margin: "1px 0px"
}
const Paper2 = {
  border: "1px solid grey",
  backgroundColor: "#dfdada",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  margin: "10px"
}
const Paper3 = {
  border: "1px solid grey",
  backgroundColor: "#dfdada",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  margin: "10px"
}
const P1 = {
  backgroundColor: "white",
  height: "3.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 7px"
}
const P2 = {
  backgroundColor: "#f3f0f0",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px"
}
const tabl = {
  borderLeft: "1px solid #969292",
  borderTop: "1px solid #969292",
  width: "110px",
  '@media(max-width: 1115px)': {
    borderLeft: "1px solid #969292",
    borderTop: "1px solid #969292",
    width: "110px",
  },
}
const taabl = {
  borderLeft: "1px solid #969292",
  borderTop: "1px solid #969292",
  width: "50px",
  backgroundColor: "#f5a543"
}
const taabbl = {
  borderRight: "1px solid #969292",
  borderLeft: "1px solid #969292",
  borderTop: "1px solid #969292",
  width: "110px"
}
const abl = {
  border: "1px solid #969292",
  width: "110px"
}
const T1 = {
  '@media(max-width: 640px)': { display: "none" },
  fontSize: "18px",
  fontWeight: "500",
  marginTop: "25px"
}

const B1 = {
  position: 'absolute',
  right: "110px",
  height: "33px",
  width: "180px",
  color: 'black',
  backgroundColor: "#6dd0b2"
}
const B2 = {
  position: 'absolute',
  right: "10px",
  height: "33px",
  width: "80px",
  color: 'black',
  backgroundColor: "#6dd0b2",
  top: "74px"
}
const B3 = {
  position: 'absolute',
  right: "10px",
  height: "33px",
  width: "80px",
  color: 'black',
  backgroundColor: "#6dd0b2"
}
const B4 = {
  height: "28px",
  width: "1px",
  color: 'black',
  backgroundColor: "#6dd0b2"
}
const B5 = {
  border: "1px solid grey",
  width: "9rem",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const B6 = {
  backgroundColor: "#6dd0b2",
  width: '2.5rem',
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  margin: "2px 52px"
}
const B7 = {
  height: "33px",
  width: "165px",
  color: 'black',
  backgroundColor: "#6dd0b2",
  margin: "8px 0px"
}
const B8 = {
  '@media(max-width: 1250px)': { fontSize: "10px", width: "85x" },
  height: "33px",
  width: "94px",
  color: 'black',
  backgroundColor: "#6dd0b2",
  margin: "8px 2px",
  float: "right"
}
const B9 = {
  '@media(max-width: 1250px)': { fontSize: "10px", width: "134px" },
  height: "33px",
  width: "165px",
  color: 'black',
  backgroundColor: "#6dd0b2",
  margin: "8px 0px",
  float: "right"
}
const B11 = {
  border: "1px solid grey",
  width: "9rem",
  height: "7rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const B12 = {
  backgroundColor: "#6dd0b2",
  width: '2.5rem',
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  margin: "2px 52px"
}

export default Dazzle