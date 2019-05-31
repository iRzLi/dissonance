json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! './api/users/user', user: user
        end
    end
end

json.servers do
    @users.each do |user|
        user.servers.each do |server|
            json.set! server.id do 
                json.partial! './api/servers/server', server: server
            end
        end
    end
end

json.rooms do
    @users.each do |user|
        user.servers.each do |server|
            server.rooms.each do |room|
                json.set! room.id do
                    json.partial! './api/rooms/room', room: room
                end
            end
        end
    end
end

json.messages do 
    @users.each do |user|
        user.messages.each do |message|
            json.set! message.id do
                json.partial! './api/messages/message', message: message
            end
        end
    end
end