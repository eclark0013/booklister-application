import React from 'react'
import {Card, Button} from 'react-bootstrap'

const BookCard = (props) => {
    let book = props.book
    return (
        <Card className="m-3" style={{minWidth:"120px", maxWidth:"220px"}}>
            <Card.Body>
                <Card.Img src={book.image_url} />
                <Card.Title>
                    {book.title}
                </Card.Title>
                <Card.Text>
                    by {book.author}
                </Card.Text>
                <Button variant="info" href={`/books/${book.id}`}>More Info</Button>
            </Card.Body>
        </Card> 
    )
}

export default BookCard