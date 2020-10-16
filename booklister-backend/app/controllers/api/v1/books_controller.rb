class Api::V1::BooksController < ApplicationController
    
    def index
        render json: Book.all
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        binding.pry
        book = Book.new(book_params)
        binding/pry
        if book.save
            params["lists"].each do |list_name|
                list = List.find_by(name: list_name)
                BookList.create(book_id: book.id, list_id: list.id, user_id: 1)
            end
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
            binding.pry
            # params.lists.each do |list|
            #     binding,pry
            #     "hi"
            # end
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
