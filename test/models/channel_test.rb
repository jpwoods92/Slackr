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

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
