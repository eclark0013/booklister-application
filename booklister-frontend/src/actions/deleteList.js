export const deleteList = (list) => {
    return (dispatch) => {     
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
                console.log("Delete list fetch request has been sent and returned")
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}