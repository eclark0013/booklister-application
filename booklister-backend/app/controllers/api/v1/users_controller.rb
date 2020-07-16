class Api::V1::UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors
        end
    end

    # def destroy
    #     user = User.find(params[:id])
    #     user.destroy
    #     render json: User.all
    # end

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end
