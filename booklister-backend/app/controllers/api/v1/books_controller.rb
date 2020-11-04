class Api::V1::BooksController < ApplicationController
    
    def index
        render json: Book.all
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.new(book_params)
        if book.save
            params["lists"].each do |list_name|
                list = List.find_by(name: list_name)
                BookList.create(book_id: book.id, list_id: list.id)
            end
            BookList.create(book_id: book.id, list_id: 1) #add to default "All Books" list
            # render json: book
            render json: {id: book.id, title: book.title, author: book.author, note: book.note, image_url: book.image_url, lists: book.lists}
        else
            render json: book.errors
        end
    end

    def update
        book = Book.find(book_params[:id])
        if book
            book.update(book_params)
            submitted_list_ids = params[:lists]
            submitted_list_ids.each do |list| #create BookList relation for new lists that the book should be added to
                book_list = BookList.where(book_id: book.id, list_id: list)
                if book_list.size === 0
                    BookList.create(book_id: book.id, list_id: list)
                end
            end
            BookList.where(book_id: book.id).each do |book_list| #delete BookList relations when a submitted list id cannot be found for a current relation
                if !submitted_list_ids.include?(book_list.list_id)
                    book_list.destroy
                end
            end
            render json: book
        else
            render json: book.errors
        end
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        render json: Book.all
    end

    private
    def book_params
        params.require(:book).permit(:id, :title, :author, :note, :image_url, :lists)
    end
end
