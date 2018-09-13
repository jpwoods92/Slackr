# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint(8)        not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workspace < ApplicationRecord

    validates :owner_id, :title, :url, presence: true

    belongs_to :user, foreign_key: :owner_id, class_name: :User
    
    has_many :channels
    has_many :memberships
    has_many :members, through: :memberships, source: :members

end
