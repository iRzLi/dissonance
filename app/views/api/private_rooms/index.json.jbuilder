json.private_rooms do
    @private_rooms.each do |private_room|
        json.set! private_room.id do
            json.partial! './api/private_rooms/private_room', data: { private_room: private_room, user: current_user}
        end
    end
end


json.users do
    if(@private_rooms[0].user1.id == current_user.id)
        json.set! current_user.id do
            json.partial! './api/users/user', user: current_user
            json.private_room_ids do
                json.array! @private_rooms.ids
            end
        end
    else
        json.set! current_user.id do
            json.partial! './api/users/user', user: current_user
            json.private_room_ids do
                json.array! @private_rooms.ids
            end
        end
    end
end

json.private_messages do
    @private_rooms.each do |private_room|
        private_room.private_messages.each do |private_message|
            json.set! private_message.id do
                json.partial! './api/private_messages/private_message', private_message: private_message
            end
        end
    end
end