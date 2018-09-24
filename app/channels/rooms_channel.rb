class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_for "rooms_channel"
  end

  def speak(data)
      
    new_message = Message.create(body: data['body'], room_id: data['room_id'], user_id: data['user_id'])
    RoomsChannel.broadcast_to('rooms_channel', new_message)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
