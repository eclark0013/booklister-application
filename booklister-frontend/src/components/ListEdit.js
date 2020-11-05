import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editList } from '../actions/editList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Redirect} from 'react-router-dom'
import {Button, Form, Container, Row, Col} from 'react-bootstrap'
import DeleteObject from './DeleteObject'
import 'bootstrap/dist/css/bootstrap.min.css'

class ListEdit extends Component {

    state = {
        id: this.props.list.id,
        name: this.props.list.name,
        note: this.props.list.note,
        books: this.props.books,
        redirectToReferrer: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editList(this.state)
        this.setState({
            redirectToReferrer: true
        })
    }

    handleBookChoiceOnChange = (event) => {
        if (event.currentTarget.className.baseVal) {
            // unselecting a single book
            let unselectedBookTitle = event.target.parentElement.innerText || event.target.parentElement.parentNode.innerText
            let oldStateBooks = [...this.state.books]
            let newStateBooks = oldStateBooks.filter(book => book.title !== unselectedBookTitle)
            this.setState({
                books: newStateBooks
            })
        }
        else if (event.currentTarget.ariaLabel){
            // unselecting all books
            this.setState({books: []})
        }
        else {
            // selecting a book
            let selectedBookTitle = Array.prototype.slice.call(document.getElementsByClassName("MuiAutocomplete-option")).filter(element => element.getAttribute("data-focus") === 'true')[0].innerText
            let selectedBook = this.props.all_books_list.books.find(book => book.title === selectedBookTitle)
            let oldStateBooks = [...this.state.books]
            if (oldStateBooks.includes(selectedBook)){
                let newStateBooks = oldStateBooks.filter(book => book !== selectedBook)
                this.setState({
                    books: newStateBooks
                })
            }
            else {
                this.setState({
                    books: oldStateBooks.concat(selectedBook)
                })
            }  
        }
    }
    
    render() {
        let allBooks = this.props.allBooks
        if (this.state.redirectToReferrer) {
            return <Redirect to={"/lists/" + this.state.id} />
        }
        if(this.state.books.length===0) {
            return null
        }
        else {
            return (
                <div>
                    Edit List:
                    <Container fluid='lg'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="note">
                                <Form.Label>Note: </Form.Label>
                                <Form.Control as="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="books">
                                <Form.Label>Add Books:</Form.Label> 
                                <Autocomplete
                                    onChange={this.handleBookChoiceOnChange}
                                    multiple
                                    id="book-selection-box"
                                    name="book"
                                    options={allBooks}
                                    getOptionLabel={option => option.title} // by ${option.author} ?
                                    defaultValue={allBooks.filter(book => this.state.books.filter(bookFromState => bookFromState.id === book.id).length > 0)}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Books" variant="outlined"/>}
                                />
                            </Form.Group>
                            <Row>
                                <Col >
                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Submit Changes</Button>
                                    </Form.Group>
                                </Col>
                                <Col >
                                    <DeleteObject object_type="list" object={this.state}/>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {editList})(ListEdit)