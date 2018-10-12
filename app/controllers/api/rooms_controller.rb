class  Api::RoomsController < ApplicationController

  def index
      @rooms = current_user.rooms
  end

  def show
    room= Room.find(params[:id])
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      Api::RoomSerializer.new(room)
    ).serializable_hash
    render json: serialized_data[:room]
  end
  
end