export default function appReducer(state = { requesting: true
  }, action) {
    switch (action.type) {
        case 'START_FETCH_LISTS':
            return {...state, requesting: true}
        case 'FETCH_LISTS':
            let lists = action.payload.lists
            let standardLists = action.payload.lists.filter(list => list.id !== 1)
            let allBooksList = action.payload.lists[0]
            return {...state, lists, standardLists, allBooksList, requesting: false}
        case 'START_ADD_LIST':
            let startAddListState = {...state, requesting: true}
            let newList = action.payload
            newList.id = state.lists[state.lists.length-1].id+1
            return {...startAddListState, lists: state.lists.concat(newList)}
        case 'ADD_LIST':
            return {...state, requesting: false}
        case 'START_ADD_BOOK':
            let startAddBookState = {...state, requesting: true}
            let listlessBook = {...action.payload}
            delete listlessBook.lists
            delete listlessBook.redirectToReferrer
            let allBooksList = startAddBookState.lists.find(list => list.name === "All Books")
            listlessBook.id = allBooksList.books[allBooksList.books.length-1].id+1
            allBooksList.books.push(listlessBook)
            for (const payloadList of action.payload.lists) {
                let targetList = startAddBookState.lists.find(list => list.name === payloadList)
                targetList.books.push(listlessBook)
            }
            return startAddBookState
        case 'ADD_BOOK':
            return {...state, requesting: false}
        case 'START_EDIT_BOOK':
            let startEditBookState = {...state, requesting: true}
            let bookToEdit = action.payload
            bookToEdit.listIds = action.payload.lists.map(list => list.id)
            delete bookToEdit.lists
            let bookIndex = startEditBookState.allBooksList.books.findIndex(book => book.id === action.payload.id)
            startEditBookState.allBooksList.books[bookIndex] = bookToEdit
            return startEditBookState
        case 'EDIT_BOOK':
            return {...state, requesting: false}
        case 'START_EDIT_LIST':
            let startEditListState = {...state, requesting: true}
            let list = startEditListState.lists.find(list => list.id === action.payload.id)
            list.name = action.payload.name
            list.note = action.payload.note
            list.books = action.payload.books
            return startEditListState
        case 'EDIT_LIST':
            return {...state, requesting: false}
        case 'START_DELETE_BOOK':
            let startDeleteBookState = {...state, requesting: true}
            let bookIndex = startDeleteBookState.allBooksList.books.findIndex(book => book.id === action.payload.id)
            startDeleteBookState.allBooksList.books.splice(bookIndex, 1)
            return startDeleteBookState
        case 'DELETE_BOOK':
            return {...state, requesting: false}
        case 'START_DELETE_LIST':
            let startDeleteListState = {...state, requesting: true}
            let listIndex = startDeleteListState.lists.findIndex(list => list.id === action.payload.id)
            startDeleteListState.lists.splice(listIndex, 1)
            return startDeleteListState
        case 'DELETE_LIST':
            return {...state, requesting: false}
        default: 
        return {...state};
    }
  }
  