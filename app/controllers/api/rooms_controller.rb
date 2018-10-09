class  Api::RoomsController < ApplicationController

  def new
  end

  def index
      @rooms = Room.all
      @rooms = @rooms.select { |room| room.member_ids.include?(current_user.id)}
  end

  def show
    room= Room.find(params[:id])
    serialized_data = ActiveModelSerializers::Adapter::Json.new(
      Api::RoomSerializer.new(room)
    ).serializable_hash
    render json: serialized_data[:room]
  end

  def update
    room = Room.find(params[:id])
    if room.update(room_params)
      room.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        Api::RoomSerializer.new(room)
      ).serializable_hash
      render json: serialized_data[:room]
    end
  end

  def destroy
    room = Room.find(params[:id])
    room.destroy
  end

  def room_params
    params.require(:room).permit(:title, :is_private, :is_dm)
  end
  
end