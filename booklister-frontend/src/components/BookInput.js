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
        this.props.addBook(this.state)
        document.querySelector('[title="Clear"]').click() // removes books from input field
        this.setState( state => {
            return({
                title: "",
                author: "",
                note: "",
                lists: []
            })
        })
        console.log("handle submit function completed")
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
                        onChange={this.handleListChoiceOnChange}
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