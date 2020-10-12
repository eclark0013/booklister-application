import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Card, Button, Row, Col} from 'react-bootstrap'


const Lists = (props) => {
    const images = (list) => {
        let booksCount = list.books.length
        console.log(booksCount)
        let firstBooks = list.books.slice(0,2)
        console.log(list.books)
        let returnHTML = firstBooks.map(book => 
            <img src={book.image_url} style={{width:"23%", margin:"5%"}}/>
        )
        if (booksCount > 2){
            returnHTML.push(<div style={{paddingTop: "25px"}}>+{list.books.length - 2}</div>)
        }
        return (
            returnHTML
        )   
    }


    return (
        <Container fluid="xl">
            <h1>All Lists:</h1>
            <Row className="justify-content-around">
                {props.lists.map(list => 
                        <Card className="m-3" style={{minWidth:"120px", maxWidth:"220px"}}>
                            <Card.Body>
                                <Card.Title>
                                    {list.name}
                                </Card.Title>
                                <Container fluid ="lg">
                                    <Row className="justify-content-sm-center">
                                        {images(list)}
                                    </Row>
                                </Container>
                                <Button variant="info" href={`/lists/${list.id}`}>More Info</Button>
                            </Card.Body>
                        </Card> 
                )}
            </Row>
        </Container>
    )
}

export default Lists