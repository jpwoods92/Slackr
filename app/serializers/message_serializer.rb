class MessageSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :body, :created_at, :username, :avatar

  def username
    object.author.username
  end

  def avatar
    object.author.avatar_url
  end
end