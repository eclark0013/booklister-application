import React, { Component}  from 'react'
import { connect } from 'react-redux'
import ListEdit from '../components/ListEdit'
import {fetchLists} from '../actions/fetchLists'
import List from '../components/List'
// import {Route, Switch} from 'react-router-dom'

class ListContainer extends Component {

    state= {
        mounted: false,
        list: {},
        books: [],
        allBooks: []
    }

    componentDidMount(){
        let list = this.props.lists.find(list => list.id.toString() === this.props.match.params.id)
        this.setState({
            mounted: true,
            list: list,
            books: list.books,
            allBooks: this.props.lists[0].books
        })
    }
    
    render() {
        if(this.state.mounted){
            if (this.props.componentToLoad === "edit"){
                return <ListEdit list={this.state.list} books={this.state.books} allBooks={this.state.allBooks} allBooksList={this.props.lists[0]} />
            }
            else {
                return <List list={this.state.list} books={this.state.books} allBooks={this.state.allBooks}/>
            }
        }
        else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return ({lists: state.lists})
}

export default connect(mapStateToProps, {fetchLists})(ListContainer)