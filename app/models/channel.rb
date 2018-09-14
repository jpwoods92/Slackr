# == Schema Information
#
# Table name: channels
#
#  id           :bigint(8)        not null, primary key
#  workspace_id :integer          not null
#  owner_id     :integer          not null
#  title        :string
#  is_private   :boolean          default(TRUE), not null
#  description  :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord
    has_many :channel_memberships, class_name: "ChannelMembership", foreign_key: "channel_id"
    has_many :users, through: :channel_memberships, source: :users
    
end

