import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'

const Book = (props) => {

    let book = props.allBooksList.books.find(book => book.id.toString() === props.match.params.id)
    if (!book.list_ids){
            book.list_ids = book.listIds
        }
    if (!book.image_url){
        book.image_url = book.imageUrl
    }
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
                        {book.list_ids.map(listId => <li key={listId}><Link to={`/lists/${listId}`}> {props.lists.find(list => list.id === listId).name} </Link></li>)}
                    </ul>
                    <Link to={`/books/${book.id}/edit`}>Edit Book</Link>
                </Col>
            </Row>
        </Container>
    )
}


export default Book