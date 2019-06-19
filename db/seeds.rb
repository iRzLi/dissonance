# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
ServerUser.destroy_all
Room.destroy_all
Message.destroy_all

admin = User.create!(email:"admin@admin.com", username:"Admin", password:"adminpassword1")
guest = User.create!(email:"guest@guest.com", username:"Guest", password:"somepassword1")
publicServer = Server.create!(name:"Public", public: true , admin_id:admin.id)
adminPrivateServer = Server.create!(name:"Home", public: false , admin_id:admin.id)
guestPrivateServer = Server.create!(name:"Home", public: false , admin_id:guest.id)

ServerUser.create!(user_id:admin.id, server_id:publicServer.id, admin:true)
ServerUser.create!(user_id:admin.id, server_id:adminPrivateServer.id, admin:true)
ServerUser.create!(user_id:guest.id, server_id:guestPrivateServer.id, admin:true)
ServerUser.create!(user_id:guest.id, server_id:publicServer.id, admin:false)

room1 = Room.create!(name:"general", server_id:publicServer.id, general: true)
room2 = Room.create!(name:"room2", server_id:publicServer.id, general: false)
room3 = Room.create!(name:"room3", server_id:publicServer.id, general: false)

Message.create!(room_id:room1.id, user_id: guest.id, body:"HEY..")
Message.create!(room_id:room1.id, user_id: guest.id, body:"HEY!!")
Message.create!(room_id:room1.id, user_id: guest.id, body:"HEY??")

private_room = PrivateRoom.create!(user1_id: admin.id, user2_id: guest.id)
PrivateMessage.create!(private_room_id: private_room.id, user_id: guest.id, body:"HEY!!")