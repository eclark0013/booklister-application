// render other components, pass them data if required, have callback functions, componentDidMount to get data, a data passer
// typically class components because may need state or componnetDidMount or other lifecycle methods

import React, { Component}  from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook' 

class BooksContainer extends Component {
    render() {
        return (
        <div>
            <div>BooksContainer</div>
            <Books books={this.props.books}/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state // limit what is being sent in the future
  }
  
  const mapDispatchToProps = dispatch => {
    return {addBook: book => addBook(book)}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);