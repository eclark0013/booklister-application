import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addBook} from './actions/addBook'

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
      this.props.addBook(favBook)
      console.log(favBook)
    })
  }
  

  render() {
    return (
      <div className="App">
        <div>App</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state // limit what is being sent in the future
}

const mapDispatchToProps = dispatch => {
  return {addBook: book => addBook(book)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
