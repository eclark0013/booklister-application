import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return(
        <div>
            Welcome to main page, full of important main page information stuff...!<br/>
        </div>
    )
}   

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)