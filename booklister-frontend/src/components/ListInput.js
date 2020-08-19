import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addListToDatabase } from '../actions/addListToDatabase'

class ListInput extends Component {
    
    state = {
        name: "",
        books: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addListToDatabase(this.state)
        this.setState( state => {
            return({
                name: ""
            })
        })
        console.log("handle submit function completed")
    }
    
    render() {
        return (
            <div>
                List Input Form
                <form onSubmit={this.handleSubmit}>
                    <label>List name: </label>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <p>Select books...</p> 
                    {/* Add book button, when clicked opens up input with type=text, as you enter info on book it autoloads options */}
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addListToDatabase})(ListInput)