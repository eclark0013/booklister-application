import React from 'react'
import BookCard from '../components/BookCard'
import {Container, Row} from 'react-bootstrap'

const BookCardsContainer = (props) => {
    return (
        <Container fluid>
            <Row className="justify-content-around">
                {props.books.map(book => 
                    <BookCard book={book} key={book.title}/>
                )}
            </Row>
        </Container>
    )
}

export default BookCardsContainer