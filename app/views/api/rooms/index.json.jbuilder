@rooms.each do |room|
    json.set! room.id do
      json.extract! room, :id, :title, :message_ids, :member_ids, :is_dm, :is_private, :created_at
    end
  end