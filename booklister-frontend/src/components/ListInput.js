import React, {Component} from 'react'

class ListInput extends Component {
    
    state = {
        name: "",
        books: []
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                List Input Form
                <form>
                    <label>List name: </label>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <p>Select books...</p> 
                    {/* Add book button, when clicked opens up input with type=text, as you enter info on book it autoloads options */}
                </form>
            </div>
        )
    }
}

export default ListInput