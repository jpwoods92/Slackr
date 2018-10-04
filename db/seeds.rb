# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

User.destroy_all
Room.destroy_all

DemoUser = User.create(username: 'Guest', email: 'GuestEmail@guestemail.com', password: 'guestpassword')


GeneralChannel = Room.create(id: 1, title: 'general', owner_id: DemoUser.id, is_private: false)
WorkChannel = Room.create(title: 'marketing', owner_id:  DemoUser.id, is_private: false)
HumorChannel = Room.create(title: 'watercooler', owner_id:  DemoUser.id, is_private: true)
DesignChannel = Room.create(title: 'graphicdesign', owner_id:  DemoUser.id, is_private: false)
SalesChannel = Room.create(title: 'sales', owner_id:  DemoUser.id, is_private: false)

GeneralMembership = RoomMembership.create(user_id: DemoUser.id, room_id: GeneralChannel.id)
HumorMembership = RoomMembership.create(user_id: DemoUser.id, room_id: HumorChannel.id)
DesignMembership = RoomMembership.create(user_id: DemoUser.id, room_id: DesignChannel.id)
SalesMembership = RoomMembership.create(user_id: DemoUser.id, room_id: SalesChannel.id)

5.times do
    faker_user = User.create(username: Faker::HarryPotter.character, email: Faker::HarryPotter.unique.spell, password: 'guestpassword')
    RoomMembership.create(user_id: faker_user.id, room_id: GeneralChannel.id)
    RoomMembership.create(user_id: faker_user.id, room_id: WorkChannel.id)
    RoomMembership.create(user_id: faker_user.id, room_id: DesignChannel.id)
    RoomMembership.create(user_id: faker_user.id, room_id: SalesChannel.id)
end

20.times do
    Message.create(user_id: User.first.id, 
        body: Faker::HarryPotter.quote,
        room_id: Room.last.id)
end