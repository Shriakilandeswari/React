import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionCreators} from "./state";
import {useState} from "react";
import {Link} from 'react-router-dom';
import './Style2.css';
//import Home from './Home';

const Create = () => {

    const dispatch = useDispatch();
    //const interns = useSelector(state => state.interns);
    
    const[id,setId] = useState('');
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');

    const navigate = useNavigate();

    function Submit(e){
        e.preventDefault();
        const newIntern = {
            id:id,
            name:name,
            email:email
        };

        dispatch(actionCreators.addIntern(newIntern));
        console.log(newIntern);
        navigate('/Home');
    }

    return(
        <div>
        <h1>ADD NEW INTERN</h1>
        <form className="formcontainer">
            <input type="text" name="id" placeholder="Enter the id" onChange={e=>setId(e.target.value)}/>
            <input type="text" name="name" placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
            <input type="text" name="email" placeholder="Enter Email" onChange={e=>setEmail(e.target.value)}/>
            <button onClick={Submit}>Add</button>
            <button><Link to="/Home">Back</Link></button>
        </form>
        </div>
    );
}

export default Create;
