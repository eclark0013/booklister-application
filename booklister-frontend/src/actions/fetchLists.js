export function fetchLists(){
    return (dispatch) => {
        dispatch({
            type: "START_FETCH_LISTS",
        })
        fetch('http://localhost:3000/api/v1/lists')
        .then(function(response){
            return response.json()
        })
        .then(lists => 
            dispatch({
                type: "FETCH_LISTS",
                payload: {lists}
            }
        ))
    }
}