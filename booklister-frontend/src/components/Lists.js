import React from 'react'
import List from './List'

const Lists = (props) => {
    return (
        <div>
            Lists are ...
                <ul>
                    {props.lists.map(list => <List list={list}/>)}
                </ul>
        </div>
    )
}

export default Lists