import React from 'react'
// import {Link} from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'
// import Book from '../components/Book'
import Books from '../components/Books'

const BooksContainer = (props) => {
    return (
        <div>
            <ul>
                {/* {props.books.map(list => <li key={book.id}><Link to={`/books/${book.id}`}> {book.title} </Link></li>)} */}
                {/* <Switch>
                    <Route path='/lists/:list_id/books/:book_id' render={(routerProps) => <Book {...routerProps} list={this.props.list.books}/>} />
                    <Route path='/lists/:list_id/books' render={(routerProps) => <Books {...routerProps} lists={this.props.list.books}/>} />
                </Switch> */}
                {/* {props.books.map(book => <li key={book.id}>{book.title}</li>)} */}
                <Books list={props.list} />
            </ul>
        </div>
    )
}

export default BooksContainer