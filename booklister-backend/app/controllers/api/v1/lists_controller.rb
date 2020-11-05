class Api::V1::ListsController < ApplicationController
    def index
        render json: List.all
    end

    def show
        list = List.find(params[:id])
        render json: list
    end

    def update
        list = List.find(params[:list][:id])
        if list
            list.update(list_params)
            submitted_book_ids = params[:books]
            submitted_book_ids.each do |book| #create BookList relation for new books that the list should now have
                book_list = BookList.where(book_id: book, list_id: list)
                if book_list.size === 0
                    BookList.create(book_id: book, list_id: list)
                end
            end
            BookList.where(list_id: list).each do |book_list| #delete BookList relations when a submitted book id cannot be found for a current relation
                if !submitted_book_ids.include?(book_list.book_id)
                    book_list.destroy
                end
            end
            render json: list
        else
            render json: list.errors
        end
    end

    def create
        list = List.new(list_params)
        if list.save
            params["books"].each do |book_title|
                book = Book.find_by(title: book_title)
                BookList.create(book_id: book.id, list_id: list.id)
            end
            render json: list
        else
            render json: list.errors
        end
    end

    def destroy
        binding.pry
        BookList.where(list_id: list_params[:id]).each do |book_list| #delete BookList relations when a submitted list id cannot be found for a current relation
            book_list.destroy
        end
        List.find(list_params[:id]).destroy
        render json: List.all
    end

    private
    def list_params
        params.require(:list).permit(:id, :name, :note)
    end

    def books_params
        params.permit(:books)
    end
end
