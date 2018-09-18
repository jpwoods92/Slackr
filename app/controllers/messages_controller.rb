class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    room = Room.find(message_params[:room_id])
    if @message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(@message)
      ).serializable_hash
      MessagesChannel.broadcast_to room, serialized_data
      head :ok
    else
      render json: @message.errors.full_messages, status: 422
    end
  end


  def message_params
      params.require(:message).permit(:body, :room_id)
  end
    
end