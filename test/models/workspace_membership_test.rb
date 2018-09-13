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

require 'test_helper'

class WorkspaceMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
