class Api::UsersController < ApplicationController

    def index
        @users = User.all.includes( {servers: :users}, :messages).with_attached_profile_picture
        # @users = User.all
        # debugger
        render :index
    end

    def create
        @user = User.create(user_params);
        if @user.save
            login(@user)
            @server = Server.create!(name:"Home",public:false, admin_id:current_user.id)
            @serverUser = ServerUser.create!(user_id:current_user, server_id:server.id, admin:true)
            @publicServerUser = ServerUser.create!(user_id:current_user, server_id:Server.first.id)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end
