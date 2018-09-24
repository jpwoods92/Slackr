class MessageBroadCastJob < ApplicationJob
    queue_as :default

    def perform(message)  
        RoomChannel.broadcast_to('rooms_channel', message: message)
    end

end