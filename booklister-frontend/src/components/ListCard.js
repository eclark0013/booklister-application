import React from 'react'
import { connect } from 'react-redux'
import ListImages from './ListImages'
import {Container, Card, Button, Row} from 'react-bootstrap'



const ListCard = (props) => {
    let list = props.list
    return (
        <Card className="m-3" style={{minWidth:"120px", maxWidth:"220px"}}>
            <Card.Body>
                <Card.Title>
                    {list.name}
                </Card.Title>
                <Container fluid ="lg">
                    <Row className="justify-content-sm-center">
                        <ListImages list={list} />
                    </Row>
                </Container>
                <Button variant="info" href={`/lists/${list.id}`}>More Info</Button>
            </Card.Body>
        </Card> 
    )
}

const mapStateToProps = state => {
    return state
}
  
  export default connect(mapStateToProps)(ListCard)
  