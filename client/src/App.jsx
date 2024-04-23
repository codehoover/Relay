import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import Create from './pages/Create';
import {BrowserRouter as Router,
Route, 
Routes
} from "react-router-dom";
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
          <Router>

            <Routes>

              <Route path='/' element={<Layout/>}>

                <Route index element={<Home/>}/>
                <Route path='Login' element={<Login/>} />
                <Route path='Register' element={<Register/>}/>
                <Route path='Create' element={<Create/>}/>

              </Route>

            </Routes>

          </Router>
    </UserContextProvider>

  )
}

export default App
