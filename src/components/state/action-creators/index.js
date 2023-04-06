export function getIntern(){
    return (dispatch) => {
        dispatch({
            type: 'GET_INTERN'
        });
    }
};

export function addIntern(data){
    return (dispatch) => {
        dispatch({
            type: 'ADD_INTERN',
            payload:data
        });
    }
};

export function editIntern(data){
    return (dispatch) => {
        dispatch({
            type: 'EDIT_INTERN',
            payload:data
        });
    }
};

export function deleteIntern(internId){
    return (dispatch) => {
        dispatch({
            type: 'DELETE_INTERN',
            payload:internId
        });
    }
};

