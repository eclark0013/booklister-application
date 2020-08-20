class Api::V1::ListsController < ApplicationController
    def index
        render json: List.all
    end

    def show
        list = List.find(params[:id])
        render json: list
    end

    def create
        list = List.new(list_params)
        if list.save
            book = Book.find_by(title: books_params["book"])
            BookList.create(book_id: book.id, list_id: list.id, user_id: 1)
            binding.pry
            render json: list
        else
            render json: list.errors
        end
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
        render json: List.all
    end

    private
    def list_params
        params.require(:list).permit(:name, :note)
    end

    def books_params
        params.permit(:book)
    end
end
