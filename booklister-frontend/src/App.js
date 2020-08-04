import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addBook} from './actions/addBook'
import BooksContainer from './containers/BooksContainer'
import ListsContainer from './containers/ListsContainer';

class App extends Component {
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
  return {addBook: book => addBook(book)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
