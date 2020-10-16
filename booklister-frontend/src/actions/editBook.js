export const editBook = (book) => {
    return (dispatch) => {     
        book.lists = book.lists.map(list => list.id)
        let configObj = {
            method: "PATCH",
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
                console.log("Patch fetch request has been sent and returned")
                // dispatch({
                //     type: "EDIT_BOOK",
                //     payload: book
                // })
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}