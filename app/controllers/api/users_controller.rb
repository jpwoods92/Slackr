class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      Room.all.each do |room|
        unless room.is_private
          RoomMembership.create(user_id: @user.id, room_id: room.id)
        end
      end
      login(@user)
      render  'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :email, :avatar_url, :password)
  end

    
end
