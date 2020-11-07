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
        case 'START_EDIT_BOOK':
            let start_edit_book_state = {...state, requesting: true}
            let bookToEdit = action.payload
            bookToEdit.list_ids = action.payload.lists.map(list => list.id)
            delete bookToEdit.lists
            let book_index = start_edit_book_state.all_books_list.books.findIndex(book => book.id === action.payload.id)
            start_edit_book_state.all_books_list.books[book_index] = bookToEdit
            return start_edit_book_state
        case 'EDIT_BOOK':
            return {...state, requesting: false}
        case 'START_EDIT_LIST':
            let start_edit_list_state = {...state, requesting: true}
            let list = start_edit_list_state.lists.find(list => list.id === action.payload.id)
            list.name = action.payload.name
            list.note = action.payload.note
            list.books = action.payload.books
            return start_edit_list_state
        case 'EDIT_LIST':
            return {...state, requesting: false}
        case 'START_DELETE_BOOK':
            let start_delete_book_state = {...state, requesting: true}
            let bookIndex = start_delete_book_state.all_books_list.books.findIndex(book => book.id === action.payload.id)
            start_delete_book_state.all_books_list.books.splice(bookIndex, 1)
            return start_delete_book_state
        case 'DELETE_BOOK':
            return {...state, requesting: false}
        case 'START_DELETE_LIST':
            let start_delete_list_state = {...state, requesting: true}
            let listIndex = start_delete_list_state.lists.findIndex(list => list.id === action.payload.id)
            start_delete_list_state.lists.splice(listIndex, 1)
            return start_delete_list_state
        case 'DELETE_LIST':
            let delete_list_state = JSON.parse(JSON.stringify(state))
            return delete_list_state
        default: 
        return {...state};
    }
  }
  