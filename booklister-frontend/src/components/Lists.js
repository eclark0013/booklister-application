import React from 'react'
import {Link} from 'react-router-dom'

const Lists = (props) => {
    return (
        <div>
            Lists are ...
                <ul>
                    {props.lists.map(list => <li key={list.id}><Link to={`/lists/${list.id}`}> {list.name} </Link></li>)}
                </ul>
            <Link to={`/lists/new`}> New List </Link><br/>
            <Link to={"/"}>Main Page</Link>
        </div>
    )
}

export default Lists