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
import BookEdit from './components/BookEdit'
import Book from './components/Book'
import Home from './components/Home'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import './app.css'



class App extends Component {

  componentDidMount(){
    this.props.fetchLists()
  }
  
  
  render() {
    if(this.props.lists){
      return (
        <div>
          <Navbar id="navbar" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Booklister</Navbar.Brand>
            <NavDropdown title="Lists" id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey={0} href="/lists">All Lists</NavDropdown.Item>
              <NavDropdown.Divider />
              {this.props.lists.map( list => 
                <NavDropdown.Item eventKey={list.id} href={`/lists/${list.id}`}>{list.name}</NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link href="/lists/new">New List</Nav.Link>
            <Nav.Link href="/books/new">New Book</Nav.Link>
          </Navbar>
          <Switch>
            <Route path='/lists/new' component={ListInput} />
            <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>} />
            <Route path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>} />
            <Route path='/books/new' component={BookInput} />
            <Route path='/books/:id/edit' render={(routerProps) => <BookEdit {...routerProps} lists={this.props.lists}/>} />
            <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} lists={this.props.lists}/>} />
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
