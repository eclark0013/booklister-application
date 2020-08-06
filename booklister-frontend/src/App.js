import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {addBook} from './actions/addBook'
import {addListsToStore} from './actions/addListsToStore'
import BooksContainer from './containers/BooksContainer'
import ListsContainer from './containers/ListsContainer';

class App extends Component {
  
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users/1/lists')
    .then(function(response){
    return response.json()
    })
    .then(data => {
      this.props.addListsToStore(data)
    })
  }
  
  render() {
    return (
      <div className="App">
        <div>App</div>
        <BooksContainer />
        <ListsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state // limit what is being sent in the future
}

const mapDispatchToProps = dispatch => {
  return {addListsToStore: lists => dispatch(addListsToStore(lists))}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
