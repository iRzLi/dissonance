json.messages do
    @messages.each do |message|
        json.partial! './api/messages/message', message: message
    end
end