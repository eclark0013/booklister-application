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
            return state
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  