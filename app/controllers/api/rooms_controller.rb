class  Api::RoomsController < ApplicationController

  def new
  end

  def index
      @rooms = Room.all
      @rooms.select { |room| room.is_private == false || room.member_ids.include?(current_user.id)}
      render json: @rooms
  end

  def create
    room = Room.new(room_params)
    room.owner_id = current_user.id
    if room.save
      render json: room
    end 
  end

  def show
    room= Room.find(params[:id])
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      Api::RoomSerializer.new(room)
    ).serializable_hash
    render json: serialized_data[:room]
  end

  def destroy
    room = current_user.rooms.find(params[:id])
    room.destroy
  end

  def room_params
    params.require(:room).permit(:title, :is_private)
  end
  
end