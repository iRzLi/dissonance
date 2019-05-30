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
            render json: @room.errors.full_messages, status: 404
        end
    end

    def destroy
        @room = Room.find_by(id: params[:id])
        if @room
            @room.destroy
        else
            render json: ["Room destruction failed"], status: 422
        end
    end

    def room_params
        params.require(:server).permit(:name,:server_id)
    end
end
