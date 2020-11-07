export const deleteList = (list) => {
    return (dispatch) => {     
        dispatch({
            type: "START_DELETE_LIST",
            payload: list
        })
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(list)
          };
        fetch("http://localhost:3000/api/v1/lists/:id", configObj)
            .then(response => {
                return response.json();
            })
            .then(list => {
                dispatch({
                    type: "DELETE_LIST",
                    payload: list
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}