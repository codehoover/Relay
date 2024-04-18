import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './pages/Layout';
import {BrowserRouter as Router,
Route, 
Routes
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Routes>

        <Route path='/' element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path='Login' element={<Login/>} />
          <Route path='Register' element={<Register/>}/>

        </Route>

      </Routes>

    </Router>
  )
}

export default App
