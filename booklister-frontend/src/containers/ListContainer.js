import React, { Component}  from 'react'
import { connect } from 'react-redux'
import ListEdit from '../components/ListEdit'
import {fetchLists} from '../actions/fetchLists'
import List from '../components/List'
import { useHistory } from "react-router-dom";
// import {Route, Switch} from 'react-router-dom'

// class ListContainer extends Component {

//     state= {
//         mounted: false,
//         list: {},
//         books: [],
//         allBooks: []
//     }

//     componentDidMount(){
//         let list
//         if (this.props.match.path === "/books") {
//             list = this.props.lists[0]
//         }
//         else {
//             list = this.props.lists.find(list => list.id.toString() === this.props.match.params.id)
//         }
//         if (!list) {
//             let history = useHistory()
//             history.push("/lists")
//         }
//         this.setState({
//             mounted: true,
//             list: list,
//             books: list.books,
//             allBooks: this.props.lists[0].books
//         })
//     }
    
//     render() {
//         if(this.state.mounted){
//             if (this.props.componentToLoad === "edit"){
//                 return <ListEdit list={this.state.list} books={this.state.books} allBooks={this.state.allBooks} allBooksList={this.props.lists[0]} />
//             }
//             else {
//                 return <List list={this.state.list} books={this.state.books} allBooks={this.state.allBooks}/>
//             }
//         }
//         else {
//             return null
//         }
//     }
// }

// const mapStateToProps = state => {
//     return ({lists: state.lists})
// }

// export default connect(mapStateToProps, {fetchLists})(ListContainer)

const ListContainer = (props) => {

    // state= {
    //     mounted: false,
    //     list: {},
    //     books: [],
    //     allBooks: []
    // }  
    // this.setState({
    //     mounted: true,
    //     list: list,
    //     books: list.books,
    //     allBooks: this.props.lists[0].books
    // })    
    let list
    if(props.match.path === "/books") {
        list = props.lists[0]
    }
    else {
        list = props.lists.find(list => list.id.toString() === props.match.params.id)
    }
    let history = useHistory()
    if (!list) {
        history.push("/lists")
    }
    if (props.componentToLoad === "edit"){
        return <ListEdit list={list} books={list.books} allBooks={props.all_books_list.books} allBooksList={props.all_books_list} />
    }
    else {
        return <List list={list} books={list.books} allBooks={props.all_books_list.books}/>
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ListContainer)