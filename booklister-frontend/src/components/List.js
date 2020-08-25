import React from 'react'

const List = (props) => { // using {list} instead of props and then calling props.list is called "deconstruction"
    let list = props.lists.find(list => list.id.toString() === props.match.params.id)

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
                {list.books.map(book => <li>{book.title}</li>)}
            </ul>
            {/* <BooksContainer /> */}
        </div>
    )
}

export default List