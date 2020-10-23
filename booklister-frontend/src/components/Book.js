import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

const Book = (props) => {
    let list = props.lists[0]
    let book = list.books.find(book => book.id.toString() === props.match.params.id)
    console.log(book)
    if(!book) {
        return (<Redirect to="/lists" />) // Write in error to show at top of page?
    }
    return (
        <Container fluid="sm">
            
            <Row>
                <Col>
                    <img src={book.image_url} width="400" />
                </Col>
                <Col>
                    <Row>
                        <h1>Title: {book.title} </h1>
                    </Row>
                    <Row>
                        <h2>Author: {book.author} </h2>
                    </Row>
                    <h5>Note:</h5> 
                    <p>{book.note}</p>
                    <div>A part of the following lists:</div> 
                    <ul>
                        {props.lists.filter(list => list.books.filter(book_check => book_check.id === book.id).length > 0).map(
                            list => <li key={list.id}><Link to={`/lists/${list.id}`}> {list.name} </Link></li>
                        )}
                    </ul>
                    <Link to={`/books/${book.id}/edit`}>Edit Book</Link>
                </Col>
            </Row>
        </Container>
    )
}


export default Book