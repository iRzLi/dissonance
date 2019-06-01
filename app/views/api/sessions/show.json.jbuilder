json.user do
    json.partial! './api/users/user', user: @user
end

json.servers do
    @user.servers.each do |server|
        json.set! server.id do
            json.partial! './api/servers/server', server: server
        end
    end
end

json.rooms do
    @user.servers.each do |server|
        server.rooms.each do |room|
            json.set! room.id do
                json.partial! './api/rooms/room', room: room
            end
        end
    end
end

json.messages do
    @user.messages.each do |message|
        json.set! message.id do
            json.partial! './api/messages/message', message: message
        end
    end
end