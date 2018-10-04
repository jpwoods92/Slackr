class  Api::RoomMembershipsController < ApplicationController

  def new
  end

  def create
    membership = RoomMembership.new(membership_params)
    membership.save
  end

  def destroy
    membership = RoomMembership.find(params[:room_id])
    membership.destroy
  end

  def room_params
      params.require(:room).permit(:user_id, :room_id)
  end
  
end