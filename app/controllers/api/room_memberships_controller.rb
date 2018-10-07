class  Api::RoomMembershipsController < ApplicationController

  def new
  end

  def create
    membership = RoomMembership.new(membership_params)
    membership.save
  end

  def destroy
    membership = current_user.room_memberships.find_by(params[:room_id])
    membership.destroy
  end

  def membership_params
      params.require(:room_membership).permit(:user_id, :room_id)
  end
  
end