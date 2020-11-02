import React from 'react'
import {Container, Card, Button, Row} from 'react-bootstrap'

const Books = (props) => {
    return (
        <Container fluid>
            <Row className="justify-content-around">
                {props.books.map(book => 
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
                )}
            </Row>
        </Container>
    )
}

export default Books