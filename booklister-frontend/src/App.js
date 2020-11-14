import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchLists } from './actions/fetchLists'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoadingPage from './components/LoadingPage';
import ListContainer from './containers/ListContainer';
import ListInput from './components/ListInput'
import ListCardsContainer from './containers/ListCardsContainer';
import BookInput from './components/BookInput'
import BookEdit from './components/BookEdit'
import Book from './components/Book'

class App extends Component {  
  
  render() {
    if (!(this.props.lists && this.props.standard_lists)) {
      this.props.fetchLists()
      return (
        <LoadingPage />
        )
    }
    else {
      return (
        <div>          
          <Navbar style={{marginBottom: "1em"}} bg="dark" variant="dark" sticky="top">
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
            <Route path='/lists/:id/edit' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"edit"} />} />
            <Route path='/lists/:id' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"show"} />} />
            <Route path='/lists' render={(routerProps) => <ListCardsContainer {...routerProps} />} />
            <Route path='/books/new' component={BookInput} />
            <Route path='/books/:id/edit' render={(routerProps) => <BookEdit {...routerProps} standard_lists={this.props.standard_lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} lists={this.props.lists} all_books_list = {this.props.all_books_list}/>} />
            <Route path='/books' render={(routerProps) => <ListContainer {...routerProps} componentToLoad={"show"}/>} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {fetchLists})(App)
