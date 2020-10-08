import React from 'react'
import {Redirect, Link} from 'react-router-dom'

const Book = (props) => {
    let list = props.lists[0]
    let book = list.books.find(book => book.id.toString() === props.match.params.id)
    console.log(book)
    if(!book) {
        return (<Redirect to="/lists" />) // Write in error to show at top of page?
    }
    return (
        <div>
            <div>Title: {book.title} </div>
            <div>Author: {book.author} </div>
            <div>Note: {book.note}</div>
            <div>A part of the following lists:</div> 
            <ul>
                {props.lists.filter(list => list.books.filter(book_check => book_check.id === book.id).length > 0).map(
                    list => <li key={list.id}><Link to={`/lists/${list.id}`}> {list.name} </Link></li>
                )}
            </ul>
        </div>
    )
}


export default Book