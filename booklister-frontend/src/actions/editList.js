export const editList = (list) => {
    return (dispatch) => {     
        dispatch({
            type: "START_EDIT_LIST",
            payload: list
        })
        list.books = list.books.map(book => book.id)
        let configObj = {
            method: "PATCH",
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
                    type: "EDIT_LIST",
                    payload: list
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}