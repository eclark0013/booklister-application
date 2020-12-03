import React from 'react'
import {Button} from 'react-bootstrap'
import { deleteBook } from '../actions/deleteBook'
import { deleteList } from '../actions/deleteList'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


const DeleteObject = (props) => {

    const history = useHistory()

    const doSomething = () =>{ 
        if (props.objectType === "book"){
            props.deleteBook(props.object)
            history.push("/books")
        }
        if (props.objectType === "list"){
            props.deleteList(props.object)
            history.push("/lists")
        }
    }

    return(
        <Button variant="warning" type="submit" onClick={doSomething}>{`Delete ${props.objectType}`}</Button>
    )
}   

export default connect(null, {deleteBook, deleteList})(DeleteObject)