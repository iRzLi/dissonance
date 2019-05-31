json.server do
    json.partial! './api/servers/server', server: @server
end

json.users do
    @server.users.each do |user|
        json.set! user.id do
            json.partial! './api/users/user', user: user
        end
    end
end

json.rooms do
    @server.rooms.each do |room|
        json.set! room.id do
            json.partial! './api/rooms/room', room: room
        end
    end
end

json.messages do
    @server.rooms.each do |room|
        room.messages.each do |message|
            json.set! message.id do
                json.partial! './api/messages/message', message: message
            end
        end
    end
end