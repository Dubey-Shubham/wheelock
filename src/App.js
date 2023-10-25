import { useState } from 'react';
import Sidebar from './components/Sidebar'
import { Box } from '@mui/material/';
import Config from './pages/Config'
import Dazzle from './pages/Dazzle'
import Login from './pages/Login'
import Users from './pages/Users'
import Forms from './pages/Forms'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Check if the current route is the login route
  const isLoginRoute = location.pathname === '/login' || location.pathname === '/dazzle';

  // Sidebar and Navbar are active on routes other than /login
  const isSidebarActive = !isLoginRoute;
  const isNavbarActive = !isLoginRoute;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/dazzle" element={<Dazzle/>} />
      </Routes>
      {isNavbarActive && <Navbar toggleSidebar={toggleSidebar} />}
      <Box sx={{ display: 'flex' }}>
        {isSidebarActive && <Sidebar isOpen={isSidebarOpen} />}
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/users" element={<Users />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </Box>

    </>
  );
}

export default App;
