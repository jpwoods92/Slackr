class Api::MessagesController < ApplicationController

    def new
    end
    

    def create
      @message = Message.new(message_params)
      @message.user_id = current_user.id
      if @message.save
        render 'api/messages/show'
      else
        render json: @message.errors.full_messages, status: 422
      end
    end

    def show
      @message = Message.find(params[:id])
    end
  

    def message_params
        params.require(:message).permit(:body)
    end
    
  end