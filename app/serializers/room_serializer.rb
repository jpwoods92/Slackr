class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :owner_id
  has_many :messages 
end
