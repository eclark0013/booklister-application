import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLists} from './actions/fetchLists'
// import BooksContainer from './containers/BooksContainer'
import ListsContainer from './containers/ListsContainer';

class App extends Component {
  
  render() {
      return (
        <div className="App">
          <ListsContainer />
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {data: state.data} // limit what is being sent in the future
}

// const mapDispatchToProps = dispatch => {
//   return {fetchLists: lists => dispatch(fetchLists(lists))}
// }

export default connect(mapStateToProps, {fetchLists})(App)
