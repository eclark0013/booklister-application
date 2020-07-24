export default function bookReducer(state = {
    books: [],
  }, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        
        console.log({books: state.books.concat(action.book)});
  
        return {books: state.books.concat(action.book)};
      
      default: return state;
    }
  }
  