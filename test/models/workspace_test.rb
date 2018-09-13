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

require 'test_helper'

class WorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
