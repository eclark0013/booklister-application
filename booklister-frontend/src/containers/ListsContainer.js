import React, { Component}  from 'react'
import { connect } from 'react-redux'
// import { addBook } from '../actions/addBook' 
// import ListInput from '../components/ListInput'
import {addListsToStore} from '../actions/addListsToStore'
import Lists from '../components/Lists'

class ListsContainer extends Component {

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

    state = {dataIsFetched: false}

    componentDidMount(){
        this.props.addListsToStore()
    }
    
    render() {
        if(this.props.lists){
            return (
                <div>
                    <div>ListsContainer</div>
                    {/* <ListInput /> */}
                    <Lists lists={this.props.lists}/>
                </div>
            )
        }
        else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return ({lists: state.data.lists})
}

// const mapDispatchToProps = dispatch => {
//     return null
// }

export default connect(mapStateToProps, {addListsToStore})(ListsContainer)