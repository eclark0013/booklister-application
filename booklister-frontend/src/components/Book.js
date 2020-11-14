import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Container, Row, Col, Image} from 'react-bootstrap'

const Book = (props) => {
    let book = props.all_books_list.books.find(book => book.id.toString() === props.match.params.id)
    if(!book) {
        return (<Redirect to="/books" />)
    }
    const handleImgError = (event) => {
        event.currentTarget.src="http://clipart-library.com/coloring/di9dxbbi7.gif"
    }
    return (
        <Container fluid>
            <Row>
                <Col style={{ maxWidth: "300px" }}>
                    <Image src={book.image_url} onError={handleImgError} thumbnail/>
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
                        {book.list_ids.map(list_id => <li key={list_id}><Link to={`/lists/${list_id}`}> {props.lists.find(list => list.id === list_id).name} </Link></li>)}
                    </ul>
                    <Link to={`/books/${book.id}/edit`}>Edit Book</Link>
                </Col>
            </Row>
        </Container>
    )
}


export default Book