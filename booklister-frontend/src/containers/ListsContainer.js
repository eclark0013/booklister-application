import React, { Component}  from 'react'
import { connect } from 'react-redux'
import ListInput from '../components/ListInput'
import {fetchLists} from '../actions/fetchLists'
import Lists from '../components/Lists'
import List from '../components/List'
import {Route, Switch} from 'react-router-dom'
import Book from '../components/Book'

class ListsContainer extends Component {

    componentDidMount(){
        this.props.fetchLists()
    }
    
    render() {
        if(this.props.lists){
            return (
                <div>
                    Lists Container Page (is all else is blank, try routing to /lists/new or /lists)<br/><br/>
                    <Switch>
                        <Route path='/lists/new' component={ListInput} />
                        <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>} />
                        <Route path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>} />
                        <Route path='/books/:id' render={(routerProps) => <Book {...routerProps} list={this.props.lists}/>} />
                    </Switch>
                </div>
            )
        }
        else {
            return null
        }
    }
}

const mapStateToProps = state => {
    return ({lists: state.lists})
}

// const mapDispatchToProps = dispatch => {
//     return null
// }

export default connect(mapStateToProps, {fetchLists})(ListsContainer)