import React, { Component } from 'react';
import { connect } from 'react-redux'
// import {addBook} from './actions/addBook'
import {addListsToStore} from './actions/addListsToStore'
// import BooksContainer from './containers/BooksContainer'
import ListsContainer from './containers/ListsContainer';

class App extends Component {
  
  // constructor(props){
  //   super(props)
  //   fetch('http://localhost:3000/api/v1/users/1/lists')
  //   .then(function(response){
  //   return response.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //     this.props.addListsToStore(data)
  //   })
  // }

  // state = {dataIsFetched: false}

  // componentDidMount(){
  //   this.props.addListsToStore()
  //   this.setState({
  //     dataIsFetched: true
  //   })
  // }
  
  render() {
      return (
        <div className="App">
          <div>App</div>
          {/* <BooksContainer /> */}
          <ListsContainer />
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {data: state.data} // limit what is being sent in the future
}

// const mapDispatchToProps = dispatch => {
//   return {addListsToStore: lists => dispatch(addListsToStore(lists))}
// }

export default connect(mapStateToProps, {addListsToStore})(App)
