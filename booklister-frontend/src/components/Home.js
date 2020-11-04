import React from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'

const Home = (props) => {
    return(
        <div>
            User the navbar above to navigate the page. You can find a desired list through the dropdown lists tab, make a new list, find a particular book through the dropdown books tab, or make a new book. Editing and deleting capabilities for lists and books can be found by going to that list or book and then clicking on the edit link. Enjoy!
        </div>
    )
}   

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)