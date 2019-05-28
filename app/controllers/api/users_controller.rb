class Api::UsersController < ApplicationController

    def index
        @users = User.all.with_attached_profile_picture
        render :index
    end

    def create
        @user = User.create(user_params);
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end