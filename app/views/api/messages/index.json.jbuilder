@messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :room_id, :body, :created_at, :user_id
    end
  end