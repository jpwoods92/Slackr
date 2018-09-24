class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :owner_id, :message_ids
  
  def message_ids
    object.messages.ids
  end
end
