import React from 'react'
import { connect } from 'react-redux'
// import {Container, Card, Button, Row} from 'react-bootstrap'


const ListImages = (props) => {
    let list = props.list
    if (list.books) {
        let booksCount = list.books.length
        console.log(booksCount)
        let firstBooks = list.books.slice(0,2)
        console.log(list.books)
        let returnHTML = firstBooks.map(book => 
            <img src={book.image_url} alt="" style={{width:"23%", margin:"5%"}}/>
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
  