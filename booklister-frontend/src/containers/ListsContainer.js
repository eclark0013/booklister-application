import React, { Component}  from 'react'
// import { connect } from 'react-redux'
// import { addBook } from '../actions/addBook' 
import ListInput from '../components/ListInput'
import Lists from '../components/Lists'

class ListsContainer extends Component {
    state = {lists: ['list_0', 'list_1', 'llist_2']}
    
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

export default ListsContainer