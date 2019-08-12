class Api::UsersController < ApplicationController

    before_action :ensure_logged_in, only: [:index, :create]

    def index
        @users = User.all.includes({servers: [:users, :rooms]}, :messages).with_attached_profile_picture
        # @users = User.all
        render :index
    end

    def show
        @user = User.includes({servers: [:users, :rooms]}, :messages).with_attached_profile_picture.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.create(user_params);
        if @user.save
            login(@user)
            @server = Server.create!(name:"Home",public:false, admin_id:@user.id)
            @serverUser = ServerUser.create!(user_id:@user.id, server_id:@server.id, admin:true)
            # JOINING THE PUBLIC SERVER
            @publicServerUser = ServerUser.create!(user_id:@user.id, server_id:Server.first.id)
            @user = User.includes({servers: [:users, :rooms]}, :messages).with_attached_profile_picture.find_by(id: @user.id);
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end
