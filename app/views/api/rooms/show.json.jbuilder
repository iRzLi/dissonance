json.room do
    json.partial! './api/rooms/room', room: @room
end

json.messages do
    @room.messages.each do |message|
        json.set! message.id do
            json.partial! './api/messages/message', message: message
        end
    end
end

json.users do
    @users.each do |user|
        if(user.servers.ids.include?(@room.server.id))
            json.set! user.id do
                json.partial! './api/users/user', user: user
            end
        end
    end
end