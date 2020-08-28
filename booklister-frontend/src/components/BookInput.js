import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from 'react-router-dom'



class BookInput extends Component {
    
    state = {
        title: "",
        author: "",
        note: "",
        lists: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let currentLists = Array.prototype.slice.call(document.getElementsByClassName("MuiChip-label")).map(e => e.innerText)
        let book = this.state
        book.lists = currentLists
        this.props.addBook(book)
        document.querySelector('[title="Clear"]').click() // removes books from input field
        this.setState( state => {
            return({
                title: "",
                author: "",
                note: ""
            })
        })
        console.log("handle submit function completed")
    }
    
    render() {
        return (
            <div>
                Book Input Form
                <form onSubmit={this.handleSubmit}>
                    <label>Book title: </label>
                    <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br />
                    <label>Author: </label>
                    <input type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
                    <br />
                    <label>Note: </label>
                    <input type="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
                    <p>Select lists to add this book to...</p> 
                    <Autocomplete
                        multiple
                        id="list-selection-box"
                        name="list"
                        options={this.props.lists}
                        getOptionLabel={(option) => `${option.name}`} // by ${option.author} ?
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Lists" variant="outlined"/>}
                    />
                    <input type="submit" />
                </form>
                <Link to={"/"}>Main Page</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addBook})(BookInput)