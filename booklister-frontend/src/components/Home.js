import React from 'react'
import {Container, Button} from 'react-bootstrap'
import {fetchBooks } from '../actions/fetchBooks'
import { connect } from 'react-redux'


const Home = (props) => {
        

    const handleClick = () => {
        props.fetchBooks()
    }

    return(
        <Container>
            <h1>Welcome to Booklister</h1>
            <h4>For libraries that are more than just Zoom backgrounds</h4>
            <p>Use the navbar above to navigate the page.</p>
            <ul>
                <li>find a desired list or browse the collection through the lists tab</li>
                <li>make a new list</li>
                <li>find a particular book or browse the collection through the books tab</li>
                <li>make a new book</li>
            </ul>
            <p>Editing and deleting capabilities for lists and books can be found by going to that list or book and then clicking on the link at the bottom of the page. Enjoy!</p>
            <Button onClick={handleClick}>Get Books</Button>
        </Container>
    )
}   

export default connect(null, {fetchBooks})(Home)
