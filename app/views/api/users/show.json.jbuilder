json.user do
    json.partial! './api/users/user', user: current_user
end

json.servers do
    current_user.servers.each do |server|
        json.partial! './api/servers/server', server: server
    end
end

json.messages do
    current_user.messages.each do |message|
        json.partial! './api/messages/message', message: message
    end
end