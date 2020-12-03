import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editBook } from '../actions/editBook'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Redirect} from 'react-router-dom'
import {Button, Form, Container, Row, Col} from 'react-bootstrap'
import DeleteObject from './DeleteObject'
import 'bootstrap/dist/css/bootstrap.min.css'



class BookEdit extends Component {

    state = {
        id: "",
        title: "",
        author: "",
        note: "",
        imageUrl: "",
        lists: [],
        redirectToReferrer: false
    }

    componentDidMount() {
        let book = this.props.allBooksList.books.find(book => book.id.toString() === this.props.match.params.id)
        if(!book) {
            return (<Redirect to="/lists/1" />) 
        }
        book.id = parseInt(this.props.match.params.id)
        this.setState({
            id: book.id,
            title: book.title,
            author: book.author,
            note: book.note,
            imageUrl: book.imageUrl,
            lists: this.props.standardLists.filter(list => list.books.filter(bookCheck => bookCheck.id === book.id).length > 0)
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(({
            lists: [...this.state.lists, this.props.allBooksList],
            redirectToReferrer: true
        }), () => {
            this.props.editBook(this.state)
        })
    }

    handleListChoiceOnChange = (event) => {
        if (event.currentTarget.className.baseVal) {
            // unselecting a single list
            let unselectedList = event.target.parentElement.outerText || event.target.parentElement.parentNode.innerText
            let oldStateLists = [...this.state.lists]
            let newStateLists = oldStateLists.filter(list => list.name !== unselectedList)
            this.setState({
                lists: newStateLists
            })
        }
        else if (event.currentTarget.ariaLabel){
            // unselecting all lists
            this.setState({lists: []})
        }
        else {
            // selecting a list
            let selectedListName = Array.prototype.slice.call(document.getElementsByClassName("MuiAutocomplete-option")).filter(element => element.getAttribute("data-focus") === 'true')[0].innerText
            let selectedList = this.props.lists.find(list => list.name === selectedListName)
            let oldStateLists = [...this.state.lists]
            if (oldStateLists.includes(selectedList)){
                let newStateLists = oldStateLists.filter(lists => lists !== selectedList)
                this.setState({
                    lists: newStateLists
                })
            }
            else {
                this.setState({
                    lists: oldStateLists.concat(selectedList)
                })
            }  
        }
    }

    
    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to={"/books/" + this.state.id} />
        }
        if(!this.state.title) {
            return null
        }
        else {
            return (                    
                <Container fluid='lg'>
                    <h3>Edit Book:</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title: </Form.Label>
                            <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="author">
                            <Form.Label>Author: </Form.Label>
                            <Form.Control type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="imageUrl">
                            <Form.Label>Image URL: </Form.Label>
                            <Form.Control type="imageUrl" placeholder="Image URL" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
                            <img src={this.state.imageUrl} height="120px" alt=""/>
                        </Form.Group>
                        <Form.Group controlId="note">
                            <Form.Label>Note: </Form.Label>
                            <Form.Control as="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="lists">
                            <Form.Label>Select lists to add this book to...</Form.Label> 
                            <Autocomplete
                                onChange={this.handleListChoiceOnChange}
                                multiple
                                id="list-selection-box"
                                name="list"
                                options={this.props.standardLists}
                                getOptionLabel={(option) => `${option.name}`}
                                defaultValue={this.state.lists}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Lists" variant="outlined"/>}
                            />
                        </Form.Group>
                        <Row>
                            <Col >
                                <Form.Group>
                                    <Button variant='primary' type='submit'>Submit Changes</Button>
                                </Form.Group>
                            </Col>
                            <Col >
                                <DeleteObject objectType="book" object={this.state}/>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            )
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {editBook})(BookEdit)