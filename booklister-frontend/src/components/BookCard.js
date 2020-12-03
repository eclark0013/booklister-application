import React from 'react'
import {Card, Button} from 'react-bootstrap'
// import Counter from './Counter'


const BookCard = (props) => {
    let book = props.book
    const handleImgError = (event) => {
        event.currentTarget.src="http://clipart-library.com/coloring/di9dxbbi7.gif"
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
                {/* <Counter /> */}
            </Card.Body>
        </Card> 
    )
}

export default BookCard