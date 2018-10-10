@users.each do |user|
    json.set! user.id do
        json.id user.id
        json.username user.username
        json.room_ids user.room_ids
    end
end