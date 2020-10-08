import React from 'react'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'

const Books = (props) => {
    return (
        <Container fluid="lg">
            <div>
                <script async src="https://cse.google.com/cse.js?cx=737199176fb4c1493"></script>
                <div class="gcse-search"></div>
            </div>
            <Row>
                {props.books.map(book => 
                    <Col xs={4}>
                        <Card className="m-3">
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
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Books