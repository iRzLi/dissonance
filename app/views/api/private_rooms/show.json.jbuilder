json.private_room do
    json.partial! './api/private_rooms/private_room', data: { private_room: @private_room, user: current_user}
end

json.users do
    if(@private_room.user1.id == current_user.id)
        json.set! @private_room.user1_id do
            json.partial! './api/users/user', user: current_user
            json.private_room_ids do
                json.array! @my_private_rooms.ids.uniq
            end
        end
    else
        json.set! @private_room.user2_id do
            json.partial! './api/users/user', user: current_user
            json.private_room_ids do
                json.array! @my_private_rooms.ids.uniq
            end
        end
    end
end

json.private_messages do
    @private_room.private_messages.each do |private_message|
        json.set! private_message.id do
            json.partial! './api/private_messages/private_message', private_message: private_message
        end
    end
end