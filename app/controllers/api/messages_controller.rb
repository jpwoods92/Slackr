class  Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(room_id: params[:room_id])
  end
    
end