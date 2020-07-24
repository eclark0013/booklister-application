export function addBook(book){
    console.log("you made it to the add book action")
    return {
        action: "ADD_BOOK",
        book: book
    }
}