class  Api::RoomsController < ApplicationController

  def index
      @rooms = Room.includes(:messages)
      @rooms = @rooms.select { |room| room.member_ids.include?(current_user.id)}
  end

  def show
    room= Room.find(params[:id])
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      Api::RoomSerializer.new(room)
    ).serializable_hash
    render json: serialized_data[:room]
  end
  
end