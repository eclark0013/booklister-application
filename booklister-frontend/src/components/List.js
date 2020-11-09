import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import BookCardsContainer from '../containers/BookCardsContainer'
import {Container, Row, Col} from 'react-bootstrap'


const List = (props) => { 
    let list = props.list

    if(!list) {
        return (<Redirect to="/lists" />)
    }

    const displayListNote = (list) =>{
        if (list.note){
            return (
                <Col>
                    <Row>Note: {list.note}</Row>
                </Col>
            )
        } 
        else {
            return null
        }
    }
    
    return (
        <Container fluid="xl">
            <h1>{list.name}</h1>
            {displayListNote(list)}
            <h4>Books:</h4>
            <BookCardsContainer books={list.books}/>
            <Link to={`/lists/${list.id}/edit`}>Edit List</Link>
        </Container>
    )
}

export default List