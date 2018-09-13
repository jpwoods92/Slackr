# == Schema Information
#
# Table name: workspace_memberships
#
#  id           :bigint(8)        not null, primary key
#  workspace_id :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class WorkspaceMembership < ApplicationRecord

    belongs_to :workspace, foreign_key: :workspace_id, class_name: :Workspace
    belongs_to :user, foreign_key: :user_id, class_name: :User
    
end
