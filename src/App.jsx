import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted.jsx';
import Login from './pages/Login.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<GetStarted />}/>
        <Route path='/login' element= {<Login />}/>
      </Routes>

    </Router>
    
    </>
  )
}

export default App
