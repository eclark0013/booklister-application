class Api::V1::ListsController < ApplicationController
    def index
        render json: List.all
    end

    def show
        list = List.find(params[:id])
        render json: list
    end

    def create
        binding.pry
        list = List.new(list_params)
        if list.save
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
        params.require(:list).permit(:name, :note, :books)
    end
end
