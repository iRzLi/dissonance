json.extract! server, :id, :name, :admin_id, :join_link, :public
json.user_ids do 
    json.array! server.users.ids
end
json.room_ids do
    json.array! server.rooms.ids
end