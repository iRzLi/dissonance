class Api::ServersController < ApplicationController
    def create
        @server = Server.create(server_params)
        @server.admin_id = current_user.id
        @serveruser = ServerUser.create(user_id: current_user.id, server_id: @server.id, admin: true)
        if @server.save && @serveruser.save
            if(@server.public == true)
                Room.create!(name:"general", server_id:@server.id, general: true)
            end
            redirect_to api_server(server)
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def show
        @server = Server.includes({rooms: :messages}, {users: :messages}).find_by(id: params[:id])
        if @server
            render :show
        else
            render json: ["Server not found"], status: 404
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if @server.admin_id == current_user.id
            @server.destroy
            render json: {}
        else
            render json: ["You are not the admin of this server"], status: 422
        end
    end


    def join_request
        server = Server.find_by(join_link: params[:join_link])
        if server
            server_user = ServerUser.create(user_id: current_user.id, server_id: server.id)
            if(server_user.save)
                redirect_to api_server(server)
            else
                render json: server_user.errors.full_messages, status: 422
            end
        else
            render json: ["Invalid link"], status: 404
        end
    end


    def server_params
        params.require(:server).permit(:name,:public)
    end

end
