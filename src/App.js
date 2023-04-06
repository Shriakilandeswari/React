
import './App.css';
import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router><div className="App">
    <Routes>
      <Route exact path="/" element ={<Login/>}/>
      <Route exact path="/Home" element ={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route exact path="/Update/:id/" element={<Update/>}/>
      <Route exact path="/Read/:id" element={<Read/>}/>
    </Routes>
  
</div>
</Router>
    
  );
}

export default App;
