import React, { Component}  from 'react'
import { connect } from 'react-redux'
// import { addBook } from '../actions/addBook' 
import ListInput from '../components/ListInput'
import {addListsToStore} from '../actions/addListsToStore'
import Lists from '../components/Lists'

class ListsContainer extends Component {

    componentDidMount(){
        this.props.addListsToStore()
    }
    
    render() {
        if(this.props.lists){
            return (
                <div>
                    <ListInput /><br></br>
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