import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/addList'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from 'react-router-dom'
import {Button, Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


class ListInput extends Component {
    bookOptions = this.props.lists[0].books

    state = {
        name: "",
        note: "",
        books: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addList(this.state)
        document.querySelector('[title="Clear"]').click() // removes books from input field
        this.setState( state => {
            return({
                name: "",
                note: "",
                books: []
            })
        })
        console.log("handle submit function completed")
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
            let selectedBook = Array.prototype.slice.call(document.getElementsByClassName("MuiAutocomplete-option")).filter(element => element.getAttribute("data-focus") === 'true')[0].innerText
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
        return (
            <div>
                List Input Form


                <div>New Form</div>
                <Container fluid='lg'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label>List name: </Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <br />
                        <Form.Label>Note: </Form.Label>
                        <Form.Control as="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
                        <br />
                        <Form.Label>Add Books:</Form.Label> 
                        <Autocomplete
                            onChange={this.handleBookChoiceOnChange}
                            multiple
                            id="book-selection-box"
                            name="book"
                            options={this.props.lists[0].books}
                            getOptionLabel={(option) => `${option.title}`} // by ${option.author} ?
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Book" variant="outlined"/>}
                        />
                        {/* <input type="submit" /> */}
                        <Form.Group>
                            <Button variant='primary' type='submit'>Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>

                <br /><br />

                <form onSubmit={this.handleSubmit}>
                    <label>List name: </label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br />
                    <label>Note: </label>
                    <input type="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
                    <p>Select books...</p> 
                    <Autocomplete
                        onChange={this.handleBookChoiceOnChange}
                        multiple
                        id="book-selection-box"
                        name="book"
                        options={this.props.lists[0].books}
                        getOptionLabel={(option) => `${option.title}`} // by ${option.author} ?
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Book" variant="outlined"/>}
                    />
                    {/* <input type="submit" /> */}
                    <Button type='submit'>Submit</Button>
                </form>
                <Link to={"/"}>Main Page</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addList})(ListInput)