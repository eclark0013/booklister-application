import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return(
        <div>
            Welcome to main page!<br/>
                <Link to={'/lists/new'}>New List</Link><br/>
                <Link to={'/lists/'}>All Lists</Link><br/>
                <Link to={'/books/new'}>New Book</Link><br/>
        </div>
    )
}   

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)