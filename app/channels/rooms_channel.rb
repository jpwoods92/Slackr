class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_for "rooms_channel"
  end

  def speak(data)
    new_message = Message.create(body: data['body'], room_id: data['room_id'], user_id: data['user_id'])
    message = new_message.as_json.merge({action: 'new_message'})
    RoomsChannel.broadcast_to('rooms_channel', message)
  end

  def create_room(data) 
    new_room = Room.create(
      title: data['title'], 
      is_private: data['is_private'], 
      owner_id: data['owner_id'], 
      is_dm: data['is_dm']
      )
    room = new_room.as_json.merge({action: 'new_room'})
    RoomsChannel.broadcast_to('rooms_channel', room)
    if new_room.is_private || new_room.is_dm
      data['user_ids'].each do |user_id|
        RoomMembership.create(user_id: user_id, room_id: new_room.id)
      end
    else
      User.all.each do |user|
        RoomMembership.create(user_id: user.id, room_id: new_room.id)
      end
    end
  end

  def delete_room(data)
    current_user = User.find(data['current_user'])
    membership = current_user.room_memberships.find_by(room_id: data['id'])
    membership.destroy
    RoomsChannel.broadcast_to('rooms_channel', {id: data['id'], action: 'delete_room'})
  end
  
  def update_room(data)
    new_data = {id: data['id'], title: data['title']}
    updated_room = Room.find(data['id'])
    if updated_room.update(new_data)
      updated_room.save
      room = updated_room.as_json.merge({action: 'new_room'})
      RoomsChannel.broadcast_to('rooms_channel', room)      
    end
  end

  def add_user(data)
    room_id = data['room_id']
    room_membership = RoomMembership.find_by(data['room_id'])
    user_id = data['user_id']
    room_membership.update({user_id: user_id, room_id: room_id})
  end

  def login_user(data)
    user = User.find_by_credentials(
      data['email'],
      data['password']
      )
    user = user.as_json
    user = { id: user['id'], username: user['username'], logged_in: user['logged_in'], action: 'login_user' }
    RoomsChannel.broadcast_to('rooms_channel', user)    
  end

  def logout_user(data)
    user = data
    user.delete('action')
    user['logged_in'] = false
    user = user.as_json.merge({action: 'logout_user'})
    RoomsChannel.broadcast_to('rooms_channel', user)
  end
  
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
