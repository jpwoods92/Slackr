class  Api::RoomMembershipsController < ApplicationController

  def new
  end

  def create
    user_ids = params[:room_membership][:user_ids].map(&:to_i)
    room_id = params[:room_membership][:room_id].to_i
    user_ids.each do |user_id|
      membership = RoomMembership.new(user_id: user_id, room_id: room_id)
      membership.save
    end
  end

  def destroy
    membership = current_user.room_memberships.find_by(room_id: params[:id])
    room_id = params[:id]
    membership.destroy
    render json: room_id
  end

  def membership_params
      params.require(:room_membership).permit(:user_ids, :room_id)
  end
  
end