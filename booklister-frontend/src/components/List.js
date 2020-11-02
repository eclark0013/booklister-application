import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import Books from './Books'
// import BooksContainer from '../containers/BooksContainer'
import {Container, Row} from 'react-bootstrap'


const List = (props) => { // using {list} instead of props and then calling props.list is called "deconstruction"
    let list = props.lists.find(list => list.id.toString() === props.match.params.id)

    if(!list) {
        return (<Redirect to="/lists" />) // Write in error to show at top of page?
    }

    const displayListNote = (list) =>{
        if (list.note){
            return (
                <Row>Note: {list.note}</Row>
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
            <Books books={list.books}/>
            <Link to='/lists'>All Lists</Link>
        </Container>
    )
}

export default List