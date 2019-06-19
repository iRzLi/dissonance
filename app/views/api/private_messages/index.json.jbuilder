json.private_messages do
    @private_messages.each do |private_message|
        json.set! private_message.id do
            json.partial! './api/private_messages/private_message', private_message: private_message
        end
    end
end