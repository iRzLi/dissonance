class Api::RoomsController < ApplicationController
    def create
        @room = Room.create(room_params)
        if(@room.save)
            redirect_to api_server(@room.server_id)
        else
            render json: @room.errors.full_messages, status: 422
        end
    end

    def show
        @room = Room.includes(:messages).find_by(id: params[:id])
        if(@room)
            render :show
        else
            render json: ["Room currently does not exist"], status: 404
        end
    end

    def destroy
        @room = Room.includes(:server).find_by(id: params[:id])
        if @room && @room.server.admin_id == current_user.id
            if @room.general ==  false
                @room.destroy
            else
                render json: ["You cannot delete the default room"], status: 422
            end
        else
            render json: ["You aren't the admin of this server"], status: 422
        end
    end

    def room_params
        params.require(:room).permit(:name,:server_id)
    end
end
