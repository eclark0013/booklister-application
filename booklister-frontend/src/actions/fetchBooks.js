// http://www.penguinrandomhouse.biz/webservices/rest/#authorsgit
export function fetchBooks(){
    return (dispatch) => {
        let configObj = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }          
        };
        fetch("https://reststop.randomhouse.com/resources/authors?firstName=Roald&lastName=Dahl", configObj)
        .then(function(response){
            return response.json()
        })
        .then((searchReturn) => {
            
            let authorId = searchReturn.author[0].authorid
            let configAuthObj = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                }          
            };
            fetch(`https://reststop.randomhouse.com/resources/authors/${authorId}`, configAuthObj)
            .then(function(response){
                return response.json()
            })
            .then((authorReturn) => {
                debugger
                console.log(authorReturn)
            })
            .catch(function(error) {
                console.log(error);
            });

            debugger
            console.log(searchReturn)
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}