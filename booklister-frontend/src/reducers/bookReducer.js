export default function bookReducer(state = {
    data: {}
  }, action) {
    switch (action.type) {
        case 'FETCH_LISTS':
            console.log("you made it to the FETCH_LISTS reducer case")
            return {data: {lists: action.payload.lists}}
        case 'ADD_LIST':
            console.log("you made it to the add_list")
            return null
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  