import React, { Component } from 'react';

class App extends Component {
  
  state = {favoriteBook: ""}

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/books')
    .then(function(response){
      return response.json()
    })
    .then(data => {
      let favBook = data[0].title
      this.setState({
        favoriteBook: favBook
      })
      console.log(favBook)
    })
  }
  

  render() {
    return (
      <div className="App">
        <div>{this.state.favoriteBook}</div>
      </div>
    );
  }
}

export default App;
