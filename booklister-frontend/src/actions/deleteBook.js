export const deleteBook = (book) => {
    return (dispatch) => {     
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
                console.log("Delete book fetch request has been sent and returned")
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}