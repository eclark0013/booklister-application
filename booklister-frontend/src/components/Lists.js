import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'


const Lists = (props) => {
    return (
        // <div>
        //     Lists are ...
        //         <ul>
        //             {props.lists.map(list => <li key={list.id}><Link to={`/lists/${list.id}`}> {list.name} </Link></li>)}
        //         </ul>
        //     <Link to={`/lists/new`}> New List </Link><br/>
        //     <Link to={"/"}>Main Page</Link>
        // </div>
        <Container fluid="lg">
            <Row>
                <h1>All Lists:</h1>
            </Row>
            <Row>
                {props.lists.map(list => 
                    <Col xs={4}>
                        <Card className="m-3">
                            <Card.Body>
                                {/* <Card.Img src="https://picsum.photos/200/300" /> */}
                                <Card.Title>
                                    {list.name}
                                </Card.Title>
                                <Row>
                                    {list.books.map(book => 
                                        // <Col >
                                            <Card>
                                                <Card.Body>
                                                    <Card.Img src={book.image_url} />
                                                </Card.Body>
                                            </Card> 
                                        // </Col>
                                    )}
                                </Row>
                                <Button variant="info" href={`/lists/${list.id}`}>More Info</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Lists