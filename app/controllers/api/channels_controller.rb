class Api::ChannelsController < ApplicationController

    def new
    end

    def index
        @channels = Channel.all
        render 'api/channels/index'
    end

    def create
      @Channel = Channel.new(channel_params)
      @Channel.owner_id = current_user.id
      if @Channel.save
        render 'api/channels/show'
      else
        render json: @Channel.errors.full_Channels, status: 422
      end
    end

    def show
      @Channel = Channel.find(params[:id])
    end
  

    def Channel_params
        params.require(:channel).permit(:title, :description, :is_private)
    end
    
  end