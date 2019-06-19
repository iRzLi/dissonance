json.extract! data[:private_room], :id
if(data[:user].id==data[:private_room].user1.id)
    json.name data[:private_room].user2.username + "##{data[:private_room].user2.username_number}"
    json.other_user_id data[:private_room].user2.id
else
    json.name data[:private_room].user1.username + "##{data[:private_room].user1.username_number}"
    json.other_user_id data[:private_room].user1.id
end
json.user_ids do
    json.array! [data[:private_room].user1_id, data[:private_room].user2_id]
end
json.private_messages_ids do
    json.array! data[:private_room].private_messages.ids
end