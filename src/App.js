import React from "react";
import {
  BrowserRouter,  
  Routes, 
  Route
}
from 'react-router-dom';

import Home from './Pages/HomePage/Home';
import Tasklist from './Pages/TasklistPage/Tasklist'
import Contact from './Pages/ContactPage/Contact';
import Corona from './Pages/CoronaPage/Corona';
import Register from './Pages/RegisterPage/Register';
import Menu from './Components/Menu/Menu'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
     
    <Routes>
        <Route exact path="/Pages/HomePage" element={<Home/>}/>
        <Route exact path="/Pages/TaskListPage" element={<Tasklist/>}/>
        <Route exact path="/Pages/ContactPage" element={<Contact/>}/>
        <Route exact path="/Pages/CoronaPage" element={<Corona/>}/>
        <Route path="/Pages/RegisterPage" element={<Register/>}/> 
    </Routes>
        
     
    </BrowserRouter>
  );
}

export default App;
