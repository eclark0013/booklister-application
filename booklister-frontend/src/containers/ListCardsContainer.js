import React from 'react'
import { connect } from 'react-redux'
import ListCard from '../components/ListCard'
import {Container, Row} from 'react-bootstrap'


const ListCardsContainer = (props) => {
    return (
        <Container fluid="xl">
            <h1>All Lists:</h1>
            <Row className="justify-content-around">
                {props.lists.map(list => 
                    <ListCard list={list} key={list.id}/>
                )}
            </Row>
        </Container>
    )
}

const mapStateToProps = state => {
    return state
  }
  
  export default connect(mapStateToProps)(ListCardsContainer)
  