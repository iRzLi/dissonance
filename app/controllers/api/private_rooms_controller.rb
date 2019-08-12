class Api::PrivateRoomsController < ApplicationController
    def create
        @private_room = PrivateRoom.create(private_room_params)
        if(@private_room.save)
            redirect_to api_private_room_url(@private_room)
        else
            render json: @private_room.errors.full_messages, status: 422
        end
    end

    def show
        @private_room = PrivateRoom.includes(:user1, :user2, :private_messages).find_by(id: params[:id])
        @my_private_rooms = current_user.private_rooms

        if(@private_room)
            render :show
        else
            render json: ["Rooms currently does not exist"], status: 404
        end
    end

    def index
        @private_rooms = current_user.private_rooms
        if(@private_rooms)
            render :index
        else
            render json: ["Rooms couldn't be found"], status: 404
        end

    end

    def private_room_params
        params.require(:private_room).permit(:user1_id,:user2_id)
    end
end
