export const deleteBook = (book) => {
    return (dispatch) => {     
        dispatch({
            type: "START_DELETE_BOOK",
            payload: book
        })
        let configObj = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(book)
          };
        fetch("http://localhost:3000/api/v1/books/:id", configObj)
            .then(response => {
                return response.json();
            })
            .then(book => {
                dispatch({
                    type: "DELETE_BOOK",
                    payload: book
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}