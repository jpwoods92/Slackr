# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint(8)        not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord
    has_many :users, class_name: "User", foreign_key: "user_id"
    has_many :channels, class_name: "Channel", foreign_key: "channel_id"
end
