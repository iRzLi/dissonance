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

room = Room.create!(name:"general", server_id:publicServer.id, general: true)

Message.create!(room_id:room.id, user_id: guest.id, body:"HEY..")
Message.create!(room_id:room.id, user_id: guest.id, body:"HEY!!")
Message.create!(room_id:room.id, user_id: guest.id, body:"HEY??")
