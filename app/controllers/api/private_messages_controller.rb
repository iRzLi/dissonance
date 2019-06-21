class Api::PrivateMessagesController < ApplicationController
    def index
        @private_messages = PrivateRoom.find_by(id: params[:private_room_id]).private_messages.includes(:user)
        if(@private_messages)
            render :index
        else
            render json: @private_messages.errors.full_messages, status: 422
        end
    end

    def create
        @private_message = PrivateMessage.create(private_room_id: params[:private_room_id], user_id: current_user.id, body: params[:private_message][:body])
        if(@private_message.save)
            render :show
        else
            render json: @private_message.errors.full_messages, status: 422
        end
    end
end
