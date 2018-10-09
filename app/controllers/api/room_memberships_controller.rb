class  Api::RoomMembershipsController < ApplicationController
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