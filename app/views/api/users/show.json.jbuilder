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

# don't need this for a refresh
# json.users do
#     @user.servers.each do |server|
#         server.users.each do |user|
#             json.set! user.id do
#                 json.partial! './api/users/user', user: user
#             end
#         end
#     end
# end

# Pulling room data and their message ids but not the messages themveslves
json.rooms do
    @user.servers.each do |server|
        server.rooms.each do |room|
            json.set! room.id do
                json.partial! './api/rooms/room', room: room
            end
        end
    end
end

# Was here to test my messages but its included into room show now
# json.messages do
#     @user.messages.each do |message|
#         json.set! message.id do
#             json.partial! './api/messages/message', message: message
#         end
#     end
# end