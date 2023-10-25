import Config from './pages/Config'
import Login from './pages/Login'
import Users from './pages/Users'
import Forms from './pages/Forms'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Landing from './pages/Landing';
import Dazzle from './pages/Dazzle';
import Client from './components/Client';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />} />
    <Route path="/dazzle" element={<Dazzle/>}>
      <Route path="client" element={<Client/>}/>
    </Route>
    <Route path="/" element={<Landing/>}>
         <Route index element={<Config/>}/>
         <Route path="/users" element={<Users />}/>
         <Route path="/forms" element={<Forms />}/>
    </Route>
    </>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

// 
import Config from './pages/Config'
import Login from './pages/Login'
import Users from './pages/Users'
import Forms from './pages/Forms'
import { Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import Dazzle from './pages/Dazzle';
import Client from './components/Client';


function App() {

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dazzle" element={<Dazzle />} />
      <Route path="/" element={<Landing />}>
        <Route index element={<Config />} />
        <Route path="users" element={<Users />} />
        <Route path="forms" element={<Forms />} />
      </Route>
    </Routes>
  );
}

export default App;