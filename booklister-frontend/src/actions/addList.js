export const addList = (list) => {
    return (dispatch) => { 
        dispatch({
            type: "START_ADD_LIST",
            payload: list
        })
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(list)
          };
        fetch("http://localhost:3000/api/v1/lists", configObj)
            .then(response => {
                return response.json();
            })
            .then(list => {
                dispatch({
                    type: "ADD_LIST",
                    payload: list
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}