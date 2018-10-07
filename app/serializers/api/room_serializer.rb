class Api::RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :owner_id, :message_ids, :member_ids, :is_dm
  
  def message_ids
    object.messages.ids
  end

  def member_ids
    object.members.ids
  end
end
