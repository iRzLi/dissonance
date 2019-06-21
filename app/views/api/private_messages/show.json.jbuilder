json.private_message do
    json.partial! './api/private_messages/private_message', private_message: @private_message
end