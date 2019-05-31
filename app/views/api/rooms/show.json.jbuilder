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