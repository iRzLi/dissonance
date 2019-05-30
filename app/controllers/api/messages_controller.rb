class Api::MessagesController < ApplicationController

    def index
        @messages = Room.find_by(id: params[:room_id]).messages
        if(@messages)
            render :index
        else
            render json: @messages.errors.full_messages, status: 422
        end
    end

    def create
        @message = Message.create(room_id: params[:room_id], user_id: current_user.id, body: params[:message][:body])
        if(@message.save)
            redirect_to api_room_messages(@message.room_id)
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
    end

    def destroy
    end
end
