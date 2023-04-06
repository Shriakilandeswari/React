import { useParams} from "react-router-dom";
import { useSelector } from "react-redux";
function Read(){

    const interns = useSelector(state => state.interns);
    const {id} = useParams();
    const filtered = interns.filter(intern => {
        return intern.id === {id};
    });
    console.log(filtered);
    return (
      <div>
       <h1>The information of the id:{id} shown here:</h1>
        
          {filtered.map(intern => {
            return (
              <div key={intern.id}>
                <h2>name: {intern.name}</h2>
                <h2>email: {intern.email}</h2>
              </div>
            );
          })}
        </div>
      );
}

export default Read;