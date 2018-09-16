# == Schema Information
#
# Table name: messages
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  body              :text             not null
#  parent_message_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  room_id           :integer          not null
#

class Message < ApplicationRecord

    validates :user_id, :body, :room_id, presence: true

    has_many :replies, class_name: "Message", foreign_key: "parent_message_id"
    belongs_to :author, class_name: "User", foreign_key: "user_id"
    belongs_to :room, class_name: "Room", foreign_key: "room_id"
    
    belongs_to :parent_message, 
        class_name: "Message", 
        foreign_key: "parent_message_id", 
        optional: true
    
    
end
