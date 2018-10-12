class  Api::MessagesController < ApplicationController

  def index
    # @messages = Message.where(room_id: params[:room_id])
    room = Room.find_by(id: params[:room_id])
    @messages = room.messages
  end
    
end