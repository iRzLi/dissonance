json.extract! user, :id, :email, :username, :username_number
if(user.profile_picture.attached?)
    json.profile_picture image_url(user.profile_picture)
else
    json.profile_picture image_url('profile_picture.jpeg')
end
json.server_ids do
    json.array! user.servers.ids
end
json.message_ids do
    json.array! user.messages.ids
end