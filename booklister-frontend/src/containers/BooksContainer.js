// render other components, pass them data if required, have callback functions, componentDidMount to get data, a data passer
// typically class components because may need state or componnetDidMount or other lifecycle methods

import React, { Component}  from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions/addBook' 

class BooksContainer extends Component {
    state = {favoriteBook: ""}

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/users/1/books')
        .then(function(response){
        return response.json()
        })
        .then(data => {
        let favBook = data[1].title
        this.setState({
            favoriteBook: favBook
        })
        this.props.addBook(favBook)
        console.log(favBook)
        })
    }
    
    render() {
        return (
        <div>
            <div>BooksContainer</div>
            <div>{this.state.favoriteBook}</div>
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