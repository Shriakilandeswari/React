import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {actionCreators} from "./state/index";
import './Homestyle.css';


const Home = () => {

    const interns = useSelector(state => state.interns);
    console.log(interns);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    function addRecord(){
        navigate('/Create');
    }

    function Edited(id,name,email){
        navigate(`/Update/${id}`);
    }

    function View(id){
        navigate(`/Read/${id}`);
    }
    
    return(
        <>
        <h1>
            LIST OF INTERNS
        </h1>
        <div>
           <center><button onClick={addRecord}> Add Record + </button></center>
        </div>
        
        <div>
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL ID</td>
                    <td>ACTION</td>
                </tr>
                </thead>
                
                <tbody>
                    {interns.map(c => {
                    return(
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>
                                <button onClick={()=>{View(c.id)}}> View</button>
                                <button onClick={()=>{Edited(c.id)}}>Edit</button>
                                <button onClick={()=> {dispatch(actionCreators.deleteIntern(c.id))}}>Delete</button>
                            </td>
                        </tr>
                    );
                    })
                }
                </tbody>
            </table>
        </div>
     </>
  
);
   
}

export default Home;

