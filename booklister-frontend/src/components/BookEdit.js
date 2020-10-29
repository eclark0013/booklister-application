import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editBook } from '../actions/editBook'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Redirect, Link} from 'react-router-dom'
import {Button, Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



class BookEdit extends Component {

    state = {
        id: "",
        title: "",
        author: "",
        note: "",
        image_url: "",
        lists: []
    }

    componentDidMount() {
        let list = this.props.lists[0]
        let book = list.books.find(book => book.id.toString() === this.props.match.params.id)
        console.log(book)
        if(!book) {
            return (<Redirect to="/lists" />) // Write in error to show at top of page?
        }
        book.id = parseInt(this.props.match.params.id)
        this.setState({
            id: book.id,
            title: book.title,
            author: book.author,
            note: book.note,
            image_url: book.image_url,
            lists: this.props.standard_lists.filter(list => list.books.filter(book_check => book_check.id === book.id).length > 0)
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
            lists: [...this.state.lists, this.props.all_books_list]
        }), () => {
            this.props.editBook(this.state)
        })
        // <Redirect to={"/books/" + this.state.id} />
        // document.querySelector('[title="Clear"]').click() // removes books from input field
        // this.setState( state => {
        //     return({
        //         title: "",
        //         author: "",
        //         note: "",
        //         imageU_url: "",
        //         lists: []
        //     })
        // })
        // console.log("handle submit function completed")
    }

    handleListChoiceOnChange = (event) => {
        console.log("you changed something with the lists")
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
        if(!this.state.title) {
            return null
        }
        else {
            return (
                <div>
                    Edit Book:  
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
                                <img src={this.state.image_url} height="120px" alt=""/>
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
                                    options={this.props.standard_lists}
                                    getOptionLabel={(option) => `${option.name}`} // by ${option.author} ?
                                    defaultValue={this.state.lists}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Lists" variant="outlined"/>}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant='primary' type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Container> 
                    <Link to={"/"}>Main Page</Link>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {editBook})(BookEdit)