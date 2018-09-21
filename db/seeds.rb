# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Room.destroy_all

DemoUser = User.create(username: 'Guest', email: 'GuestEmail@guestemail.com', password: 'guestpassword')

GeneralChannel = Room.create(id: 1, title: 'general', owner_id: User.first.id, is_private: false)
WorkChannel = Room.create(id: 2, title: 'marketing', owner_id:  User.first.id, is_private: false)
HumorChannel = Room.create(id: 3, title: 'watercooler', owner_id:  User.first.id, is_private: true)
DesignChannel = Room.create(id: 4, title: 'graphicdesign', owner_id:  User.first.id, is_private: false)
SalesChannel = Room.create(id: 5, title: 'sales', owner_id:  User.first.id, is_private: false)


