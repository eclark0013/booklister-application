import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editList } from '../actions/editList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Redirect} from 'react-router-dom'
import {Button, Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



class ListEdit extends Component {

    state = {
        id: "",
        name: "",
        note: "",
        books: []
    }

    componentDidMount() {
        let list = this.props.standard_lists.find(list => list.id.toString() === this.props.match.params.id)
        console.log(list)
        if(!list || list.id === 1) {
            return (<Redirect to="/lists" />) // Write in error to show at top of page?
        }
        list.id = parseInt(this.props.match.params.id)
        list.note = list.note || ""
        this.setState({
            id: list.id,
            name: list.name,
            note: list.note,
            books: list.books
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

    handleBookChoiceOnChange = (event) => {
        if (event.currentTarget.className.baseVal) {
            // unselecting a single book
            let unselectedBook = event.target.parentElement.parentNode.innerText
            let oldStateBooks = [...this.state.books]
            let newStateBooks = oldStateBooks.filter(book => book !== unselectedBook)
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
        if(!this.state.books) {
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
                                    options={this.props.all_books_list.books}
                                    getOptionLabel={(option) => `${option.title}`} // by ${option.author} ?
                                    value={this.state.books}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Book" variant="outlined"/>}
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
}



const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {editList})(ListEdit)