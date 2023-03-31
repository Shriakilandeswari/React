import "./Style.css";
import React,{useState} from 'react'
// import Resume from './Resume';
import { useHistory } from "react-router-dom";


//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(){
const[user,setUser] = useState("");
const[pass,setPass] = useState("");

const history = useHistory();

const handleUserChange =(e) => {
    setUser(e.target.value);
}

const handlePasswordChange =(e) => {
    setPass(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = [
        {user:"name1",pass:"pass1"},
        {user:"name2",pass:"pass2"},
        {user:"name3",pass:"pass3"},
        {user:"name4",pass:"pass4"},
        {user:"name5",pass:"pass5"}
    ];

    let hardcodedUser = hardcodedCred.find(code => code.user === user);


    if((user === hardcodedUser.user) && pass === hardcodedUser.pass){
        history.push('/InternDetails');
        
    }
    else{
        alert("wrong Username or Password");
        history.push('/');
        setUser("");
        setPass("");
    }
}

return(<div className="background">
<div className="container">
    <div className="content">
        <h2 className="logo">
        
        Curriculum Vitae</h2>
        
        <div className="text">
            <h2>Welcome!</h2>
            <span>Sign in to view your resume.</span>
        </div>
    </div>
    <div className="login-box">
        <div className="form-box">
        <form action="" name="myform" id="login-form" onSubmit={handleLoginSubmit}>
            <h2>Sign In</h2>
            <div className="input-box">
            <span className="icon"><i className='bx bxs-envelope'></i></span>
            <input name="user" id="user" type="text" value={user} onChange={handleUserChange} required/>
            <label>Username</label>
            </div>
            <div className="input-box">
            <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
            <input id="pass" name="pass" type="password" value={pass} onChange={handlePasswordChange} required/>
            <label>Password</label>
            </div>
            <button id="submitBtn" type="submit" value="login" >Sign In</button>
        </form> 
    </div>
    </div>

</div>
</div>);
}
export default Login;