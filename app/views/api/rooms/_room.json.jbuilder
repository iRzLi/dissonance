json.extract! room, :id, :name, :server_id
json.message_ids do
    json.array! room.messages.ids
end