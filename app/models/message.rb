# == Schema Information
#
# Table name: messages
#
#  id                :bigint(8)        not null, primary key
#  user_id           :integer          not null
#  body              :text             not null
#  parent_message_id :integer
#  channel_id        :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Message < ApplicationRecord

    validates :user_id, :body, :channel_id, presence: true
    
    after_initialize :ensure_channel_id

    has_many :replies, class_name: "Message", foreign_key: "parent_message_id"
    belongs_to :author, class_name: "User", foreign_key: "user_id"
    belongs_to :channel, class_name: "Channel", foreign_key: "channel_id"
    
    belongs_to :parent_message, 
        class_name: "Message", 
        foreign_key: "parent_message_id", 
        optional: true
        
    def ensure_channel_id
        self.channel_id = 1
    end
    
    
end
