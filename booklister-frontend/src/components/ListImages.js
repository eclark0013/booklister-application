import React from 'react'
import { connect } from 'react-redux'


const ListImages = (props) => {
    let list = props.list
    const handleImgError = (event) => {
        event.currentTarget.src="http://clipart-library.com/coloring/di9dxbbi7.gif"
    }
    if (list.books) {
        let booksCount = list.books.length
        let firstBooks = list.books.slice(0,2)
        let returnHTML = firstBooks.map(book => 
            <img src={book.imageUrl} alt="" onError={handleImgError} style={{width:"23%", margin:"5%"}}/>
        )
        if (booksCount > 2){
            returnHTML.push(<div style={{paddingTop: "25px"}}>+{list.books.length - 2}</div>)
        }
        return (
            returnHTML
        )  
    } 
    else {
        return null
    }
}


const mapStateToProps = state => {
    return state
}
  
export default connect(mapStateToProps)(ListImages)
  