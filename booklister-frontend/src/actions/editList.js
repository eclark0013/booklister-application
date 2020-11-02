export const editList = (list) => {
    return (dispatch) => {     
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
            .then(book => {
                console.log("Patch fetch request has been sent and returned to edit list")
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}