import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import Books from './Books'
// import BooksContainer from '../containers/BooksContainer'

const List = (props) => { // using {list} instead of props and then calling props.list is called "deconstruction"
    let list = props.lists.find(list => list.id.toString() === props.match.params.id)

    if(!list) {
        return (<Redirect to="/lists" />) // Write in error to show at top of page?
    }

    const displayListNote = (list) =>{
        if (list.note){
            return (
                <div>Note: {list.note}</div>
            )
        } 
        else {
            return null
        }
    }
    
    return (
        <div>
            Name: {list.name}
            <br />
            {displayListNote(list)}
            Books:
            <ul>    
                <Books books={list.books}/>
            </ul>
            <Link to='/lists'>Back to Lists</Link>
        </div>
    )
}

export default List