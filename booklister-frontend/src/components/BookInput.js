import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import {Link} from 'react-router-dom'
import {Button, Form, Container} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



class BookInput extends Component {
    
    state = {
        title: "",
        author: "",
        note: "",
        image_url: "",
        lists: [],
        redirectToReferrer: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBook(this.state)
        this.setState({
            redirectToReferrer: true
        })
    }

    handleListChoiceOnChange = (event) => {
        if (event.currentTarget.className.baseVal) {
            // unselecting a single list
            let unselectedList = event.target.parentElement.parentNode.innerText
            let oldStateLists = [...this.state.lists]
            let newStateLists = oldStateLists.filter(list => list !== unselectedList)
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
            let selectedList = Array.prototype.slice.call(document.getElementsByClassName("MuiAutocomplete-option")).filter(element => element.getAttribute("data-focus") === 'true')[0].innerText
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
            return <Redirect to={"/books"} />
        }
        return (
            <div>
                New Book:
                <Container fluid='lg'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title: </Form.Label>
                            <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="author">
                            <Form.Label>Author: </Form.Label>
                            <Form.Control type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="image_url">
                            <Form.Label>Image URL: </Form.Label>
                            <Form.Control type="image_url" placeholder="Image URL" name="image_url" value={this.state.image_url} onChange={this.handleChange}/>
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
                                options={this.props.lists.filter(list => list.name !== "All Books")}
                                getOptionLabel={(option) => `${option.name}`} // by ${option.author} ?
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Lists" variant="outlined"/>}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button variant='primary' type='submit'>Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addBook})(BookInput)