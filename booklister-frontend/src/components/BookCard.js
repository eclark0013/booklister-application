import React from 'react'
import {Card, Button} from 'react-bootstrap'

const BookCard = (props) => {
    let book = props.book
    const handleImgError = (event) => {
        event.currentTarget.src="https://lh3.googleusercontent.com/proxy/cdorEzsjBEmJOexk6RgpUNcqI-snxPTuZilyQL_HaA1JwN2qGHrVPN9OcOHoVshH0c2odbB8I1QTXkHSyq5TEcN6UIR7B4fwsA"
    }
    return (
        <Card className="m-3" style={{minWidth:"120px", maxWidth:"220px"}}>
            <Card.Body>
                <Card.Img src={book.image_url} onError={handleImgError} />
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