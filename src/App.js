
import './App.css';
import React from 'react';
import Login from './components/Login';
import InternDetails from './components/InternDetails';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  const [interns,setInterns] = React.useState([
    {id:1,name:"ABC",email:"ABC@mail.com"},
    {id:2,name:"DEF",email:"DEF@mail.com"},
    {id:3,name:"GHI",email:"GHI@mail.com"},
    {id:4,name:"JKL",email:"JKL@mail.com"},
    {id:5,name:"MNO",email:"MNO@mail.cm"}
  ]);

  return (
    
    <Router>
      <div className="App">
      
        
        <Routes>
          <Route exact path="/" element ={<Login/>}/>
          <Route exact path="/InternDetails" element ={<InternDetails/>}/>
          <InternDetails interns = {interns}/>
        </Routes>
      
    </div>
    </Router>
    
  );
}

export default App;
