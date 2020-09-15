export const addBook = (book) => {
    return (dispatch) => { 
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(book)
          };
        fetch("http://localhost:3000/api/v1/books", configObj)
            .then(response => {
                return response.json();
            })
            .then(book => {
                dispatch({
                    type: "ADD_BOOK",
                    payload: book
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}