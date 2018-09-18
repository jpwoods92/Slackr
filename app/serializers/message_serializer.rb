class MessageSerializer < ActiveModel::Serializer
  attributes :id, :room_id, :body, :created_at, :username

  belongs_to :user

  def username
    object.author.username
  end
end