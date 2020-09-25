export default function appReducer(state = { 
  }, action) {
    switch (action.type) {
        case 'FETCH_LISTS':
            console.log("you made it to the FETCH_LISTS reducer case")
            return {lists: action.payload.lists}
        case 'ADD_LIST':
            console.log("you made it to the add_list")
            return {...state, lists: state.lists.concat(action.payload)}
        case 'ADD_BOOK':
            console.log("you made it to the add_book")
            console.log(state)
            let copiedState = JSON.parse(JSON.stringify(state))
            let listlessBook = JSON.parse(JSON.stringify(action.payload))
            delete listlessBook.lists
            for (const payloadList of action.payload.lists) {
                let targetList = copiedState.lists.find(stateList => stateList.name === payloadList.name).books
                targetList.push(listlessBook)
            }
            return copiedState
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  