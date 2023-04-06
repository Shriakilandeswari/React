import {useDispatch} from "react-redux";
import {actionCreators } from "./state";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Link , useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Update = () => {

    //const interns = useSelector(state => state.interns);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();
    console.log(id);
    const interns = useSelector((state) => state.interns);
    const existingUser = interns.filter(f => f.id === id);
    console.log(existingUser);
    const[name,email] = existingUser[0];
    const[uname,setName] = useState(name);
    const[uemail,setEmail] = useState(email);

    const handleUpdate = (e) =>{
        e.preventDefault();
        const updatedIntern = {
            id:id,
            name:uname,
            email:uemail,
        };
        console.log(updatedIntern);
        dispatch(actionCreators.editIntern(updatedIntern));
        navigate("/Home");

    }

    return(
        <div>
        <h1>UPDATE INTERN</h1>
        <form className="formcontainer" onSubmit={handleUpdate}>
            <h1>Editing</h1>
            <input type="text" value={uname} placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
            <input type="text" value={uemail} placeholder="Enter Email" onChange={e=>setEmail(e.target.value)}/>
            <button>Update</button>
            <button><Link to="/Home">Back</Link></button>
        </form>
        </div>
    )
}
export default Update;