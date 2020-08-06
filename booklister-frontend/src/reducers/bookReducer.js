export default function bookReducer(state = {
    data: []
  }, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            console.log({books: state.data.books.concat(action.book)});
            return {data: state.data.books.concat(action.book)};

        case 'ADD_LISTS_TO_STORE':
            debugger
            console.log("looks like you made it")
            return {data: action.lists}
        
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  