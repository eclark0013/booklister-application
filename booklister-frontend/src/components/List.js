import React from 'react'

const List = ({list}) => {
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
        <li>
            Name: {list.name}
            <br />
            {displayListNote(list)}
            {/* <BooksContainer /> */}
        </li>
    )
}

export default List