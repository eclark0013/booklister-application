import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLists} from './actions/fetchLists'
// import BooksContainer from './containers/BooksContainer'
// import ListsContainer from './containers/ListsContainer';
import {Switch, Route, Link} from 'react-router-dom'
import BookInput from './components/BookInput'
import ListInput from './components/ListInput'
import Lists from './components/Lists'
import List from './components/List'
import Book from './components/Book'
import Home from './components/Home'


class App extends Component {

  componentDidMount(){
    this.props.fetchLists()
  }
  
  
  render() {
    if(this.props.lists){
      return (
        <div>
          <Switch>
            <Route path='/lists/new' component={ListInput} />
            <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>} />
            <Route path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>} />
            <Route path='/books/new' component={BookInput} />
            <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} />} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      )
    }
    else {
      return null
    }
  }
}

const mapStateToProps = state => {
  return state // limit what is being sent in the future
}

// const mapDispatchToProps = dispatch => {
//   return {fetchLists: lists => dispatch(fetchLists(lists))}
// }

export default connect(mapStateToProps, {fetchLists})(App)
