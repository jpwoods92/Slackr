class RoomsController < ApplicationController

    def new
    end

    def index
        @rooms = Room.all
        render json: @rooms
    end

    def create
      room = Room.new(room_params)
      room.owner_id = current_user.id
      if room.save
        serialized_data = ActiveModelSerializers::Adapter::Json.new(
          RoomSerializer.new(room)
        ).serializable_hash
        ActionCable.server.broadcast 'rooms_channel', serialized_data
        head :ok
      end
    end
  

    def room_params
        params.require(:room).permit(:title, :is_private)
    end
    
  end