import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchLists} from './actions/fetchLists'
// import BooksContainer from './containers/BooksContainer'
import ListContainer from './containers/ListContainer';
import {Switch, Route} from 'react-router-dom'
import ListEdit from './components/ListEdit'
import ListInput from './components/ListInput'
import Lists from './components/Lists'
import List from './components/List'
import BookEdit from './components/BookEdit'
import BookInput from './components/BookInput'
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
      console.log(this.props.all_books_list.books)
      return (
        <div>
          <Navbar id="navbar" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Booklister</Navbar.Brand>
            <NavDropdown title="Lists" id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey={0} href="/lists">All Lists</NavDropdown.Item>
              <NavDropdown.Divider />
              {this.props.lists.map( list => 
                <NavDropdown.Item key={list.id} href={`/lists/${list.id}`}>{list.name}</NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link href="/lists/new">New List</Nav.Link>
            <NavDropdown title="Books" id="collapsible-nav-dropdown">
              <NavDropdown.Item eventKey={0} href="/lists/1">All Books</NavDropdown.Item>
              <NavDropdown.Divider />
              {this.props.all_books_list.books.map( book => 
                <NavDropdown.Item key={book.id} href={`/books/${book.id}`}>{book.title}</NavDropdown.Item>
              )}
            </NavDropdown>
            <Nav.Link href="/books/new">New Book</Nav.Link>
          </Navbar>
          <Switch>
            <Route path='/lists/new' render={(routerProps) => <ListInput {...routerProps} standard_lists={this.props.standard_lists} all_books_list = {this.props.all_books_list}/>}  />
            <Route path='/lists/:id/edit' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"edit"} standard_lists={this.props.standard_lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/lists/:id' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"show"} lists={this.props.lists}/>} />
            {/* <Route path='/lists/:id/edit' render={(routerProps) => <ListEdit {...routerProps} standard_lists={this.props.standard_lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>} /> */}
            <Route path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>} />
            <Route path='/books/new' component={BookInput} />
            <Route path='/books/:id/edit' render={(routerProps) => <BookEdit {...routerProps} standard_lists={this.props.standard_lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} lists={this.props.lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/books' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"show"} lists={this.props.lists}/>} />
            {/* <Route path='/books/' render={(routerProps) => <Book {...routerProps} lists={this.props.lists}/>} /> */}
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
