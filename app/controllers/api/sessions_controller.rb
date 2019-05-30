class Api::SessionsController < ApplicationController
    
    def create
        @user = User.includes(:servers, :messages).find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid Credentials"], status: 422
        end
    end
    
    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["Can't logout if not logged in"], status: 404
        end
    end
end
