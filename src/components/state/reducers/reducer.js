const initialstate = {
    interns : [
    {id:1,name:"ABC",email:"ABC@mail.com"},
    {id:2,name:"DEF",email:"DEF@mail.com"},
    {id:3,name:"GHI",email:"GHI@mail.com"},
    {id:4,name:"JKL",email:"JKL@mail.com"},
    {id:5,name:"MNO",email:"MNO@mail.cm"}
   ]
};

   const reducer = (state = initialstate,action) => {
    switch(action.type){
        case 'ADD_INTERN':
            return{
                ...state,
                interns: state.interns.concat(action.payload)
            };
        case 'EDIT_INTERN':
            return{
                ...state,    
                interns: state.interns.map(    
                    (content, i) => content.id === action.payload.id ? {...content, name : action.payload.name ,  email: action.payload.email}    
                                            : content)    
            };    
        case 'DELETE_INTERN':
            return{
                ...state,
                interns:state.interns.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
            }
    }
   
    export default reducer;