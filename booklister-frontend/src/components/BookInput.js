import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { addList } from '../actions/addList'
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';


class BookInput extends Component {
    
    // state = {
    //     name: "",
    //     note: "",
    //     books: []
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     let currentBooks = Array.prototype.slice.call(document.getElementsByClassName("MuiChip-label")).map(e => e.innerText)
    //     let listData = this.state
    //     listData.books = currentBooks
    //     this.props.addList(listData)
    //     document.querySelector('[title="Clear"]').click() // removes books from input field
    //     this.setState( state => {
    //         return({
    //             name: "",
    //             note: ""
    //         })
    //     })
    //     console.log("handle submit function completed")
    // }
    
    // render() {
    //     return (
    //         <div>
    //             List Input Form
    //             <form onSubmit={this.handleSubmit}>
    //                 <label>List name: </label>
    //                 <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
    //                 <br />
    //                 <label>Note: </label>
    //                 <input type="textarea" placeholder="Note" name="note" value={this.state.note} onChange={this.handleChange}/>
    //                 <p>Select books...</p> 
    //                 <Autocomplete
    //                     multiple
    //                     id="book-selection-box"
    //                     name="book"
    //                     options={this.props.lists[0].books}
    //                     getOptionLabel={(option) => `${option.title}`} // by ${option.author} ?
    //                     style={{ width: 300 }}
    //                     renderInput={(params) => <TextField {...params} label="Book" variant="outlined"/>}
    //                 />
    //                 <input type="submit" />
    //             </form>
    //         </div>
    //     )
    // }
    render () {
        return (
            <div>
                Book Input
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(BookInput)