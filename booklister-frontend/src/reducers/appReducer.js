export default function appReducer(state = { 
  }, action) {
    switch (action.type) {
        case 'FETCH_LISTS':
            return {lists: action.payload.lists, standard_lists: action.payload.lists.filter(list => list.id !== 1), all_books_list: action.payload.lists[0]}
        
        case 'START_ADD_LIST':
            let start_add_list_state = {...state, requesting: true}
            let new_list = action.payload
            new_list.id = state.lists[state.lists.length-1].id+1
            return {...start_add_list_state, lists: state.lists.concat(new_list)}
        case 'ADD_LIST':
            return {...state, requesting: false}
        case 'START_ADD_BOOK':
            let start_add_book_state = JSON.parse(JSON.stringify(state))
            let listlessBook = JSON.parse(JSON.stringify(action.payload))
            delete listlessBook.lists
            delete listlessBook.redirectToReferrer
            let all_books_list = start_add_book_state.lists.find(list => list.name === "All Books")
            debugger
            listlessBook.id = all_books_list.books[all_books_list.books.length-1].id+1
            all_books_list.books.push(listlessBook)
            for (const payloadList of action.payload.lists) {
                let targetList = start_add_book_state.lists.find(list => list.name === payloadList)
                targetList.books.push(listlessBook)
            }
            return {...start_add_book_state, requesting: true}
        case 'ADD_BOOK':
            return {...state, requesting: false}
        case 'EDIT_BOOK':
            let edit_book_state = JSON.parse(JSON.stringify(state))
            return edit_book_state
        case 'EDIT_LIST':
            let edit_list_state = JSON.parse(JSON.stringify(state))
            return edit_list_state
        case 'DELETE_BOOK':
            let delete_book_state = JSON.parse(JSON.stringify(state))
            return delete_book_state
        case 'DELETE_LIST':
            let delete_list_state = JSON.parse(JSON.stringify(state))
            return delete_list_state
        default: 
            console.log("default reducer case hit")
        return state;
    }
  }
  