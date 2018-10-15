@users.each do |user|
    json.set! user.id do
        json.id user.id
        json.username user.username
        json.room_ids user.room_ids
        json.logged_in user.logged_in
    end
end