export const addListToDatabase = (list) => {
    // possible because of thunk
    return (dispatch) => { 
        debugger
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(list)
          };
        fetch("http://localhost:3000/api/v1/users/1/lists", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                // list is returned here
                console.log(object)
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}