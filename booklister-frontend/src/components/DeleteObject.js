import React from 'react'
import {Button} from 'react-bootstrap'
import { deleteBook } from '../actions/deleteBook'
import { deleteList } from '../actions/deleteList'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";


const DeleteObject = (props) => {

    const history = useHistory()

    const doSomething = () =>{ 
        if (props.object_type === "book"){
            props.deleteBook(props.object)
            history.push("/home")
        }
        if (props.object_type === "list"){
            props.deleteList(props.object)
            history.push("/home")
        }
    }

    return(
        <Button variant="warning" type="submit" onClick={doSomething}>{`Delete ${props.object_type}`}</Button>
    )
}   

export default connect(null, {deleteBook, deleteList})(DeleteObject)