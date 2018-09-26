class MessagesController < ApplicationController

  def index
    @messages = Message.where(room_id: params[:room_id])
    render json: @messages
  end

  def create
    @message = current_user.messages.new(message_params)
    room = Room.find(message_params[:room_id])
    @message.save
  end


  def message_params
      params.require(:message).permit(:body, :room_id)
  end
    
end