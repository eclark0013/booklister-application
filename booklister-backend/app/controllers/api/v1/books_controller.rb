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
                BookList.create(book_id: book.id, list_id: list.id, user_id: 1)
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
        params.require(:book).permit(:title, :author, :note)
    end
end
