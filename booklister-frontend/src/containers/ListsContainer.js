import React, { Component}  from 'react'
import { connect } from 'react-redux'
// import { addBook } from '../actions/addBook' 
import ListInput from '../components/ListInput'
import Lists from '../components/Lists'

class ListsContainer extends Component {
    state = {lists: ['list_0', 'list_1', 'llist_2']}

    // componentDidMount(){
    //     fetch('http://localhost:3000/api/v1/users/1/books')
    //     .then(function(response){
    //     return response.json()
    //     })
    //     .then(data => {
    //     let favBook = data[1].title
    //     this.setState({
    //         favoriteBook: favBook
    //     })
    //     this.props.addBook(favBook)
    //     console.log(favBook)
    //     })
    // }
    
    render() {
        return (
        <div>
            <div>ListsContainer</div>
            <ListInput />
            <Lists />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return null
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)