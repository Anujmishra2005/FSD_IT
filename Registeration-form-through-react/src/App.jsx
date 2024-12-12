import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout'

const App = () => {
  const [regData,setRegData]=useState();
  regData(data);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
           <Route path="/login" element={<Login />}></Route>
           <Route path="/register" element={<Register regData={setRegData} />}></Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App