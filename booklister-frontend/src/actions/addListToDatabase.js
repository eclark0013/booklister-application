export const addListToDatabase = (list) => {
    // possible because of thunk
    return (dispatch) => { 
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({list})
          };
        fetch("http://localhost:3000/api/v1/users/1/lists", configObj)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                debugger
                console.log(object)
            })
            .catch(function(error) {
                debugger
                console.log(error);
            });
        
        
        
        // fetch('http://localhost:3000/api/v1/users/1/lists')
        // .then(function(response){
        //     return response.json()
        // })
        // .then(data => dispatch({
        //     type: "ADD_LISTS_TO_STORE",
        //     payload: {lists: data}
        // }))
    }
}