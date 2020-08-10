import React from 'react'
import List from './List'

const Lists = (props) => {
    debugger
    return (
        <div>
            Lists are ...
            <div>
                <ul>
                    {props.lists.map(list => <li><List name={list.name}/></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Lists