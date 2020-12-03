import React from 'react'
import { connect } from 'react-redux'
import ListEdit from '../components/ListEdit'
import List from '../components/List'
import { useHistory } from "react-router-dom";


const ListContainer = (props) => {
  
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
        return null
    }
    else if (props.componentToLoad === "edit"){
        return <ListEdit list={list} books={list.books} allBooks={props.allBooksList.books} allBooksList={props.allBooksList} />
    }
    else {
        return <List list={list} books={list.books} allBooks={props.allBooksList.books}/>
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ListContainer)