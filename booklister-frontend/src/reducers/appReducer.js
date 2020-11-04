export default function appReducer(state = { 
  }, action) {
    switch (action.type) {
        case 'FETCH_LISTS':
            return {lists: action.payload.lists, standard_lists: action.payload.lists.filter(list => list.id !== 1), all_books_list: action.payload.lists[0]}
        case 'ADD_LIST':
            return {...state, lists: state.lists.concat(action.payload)}
        case 'ADD_BOOK':
            let copiedState = JSON.parse(JSON.stringify(state))
            let listlessBook = JSON.parse(JSON.stringify(action.payload))
            delete listlessBook.lists
            for (const payloadList of action.payload.lists) {
                let targetList = copiedState.lists.find(stateList => stateList.name === payloadList.name).books
                targetList.push(listlessBook)
            }
            return copiedState
        case 'EDIT_BOOK':
            let edit_book_state = JSON.parse(JSON.stringify(state))
            return edit_book_state
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  