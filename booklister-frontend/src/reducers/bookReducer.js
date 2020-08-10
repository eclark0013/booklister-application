export default function bookReducer(state = {
    data: {}
  }, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            console.log("you made it to the add_book reducer case");
            return {data: state.data.books.concat(action.book)};

        case 'ADD_LISTS_TO_STORE':
            console.log("you made it to the add_lists_to_store reducer case")
            return {data: {lists: action.payload.lists}}
        
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  