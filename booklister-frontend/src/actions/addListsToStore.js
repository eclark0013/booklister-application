export function addListsToStore(lists){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users/1/lists')
        .then(function(response){
            return response.json()
        })
        .then(data => dispatch({
            type: "ADD_LISTS_TO_STORE",
            payload: {lists: data}
        }))
    }
}