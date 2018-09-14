class Api::ChannelMembershipsController < ApplicationController

    def create
        LineChannel.broadcast_to(@line, {line: @line, users:
        @line.waiting_users})
    end

    def update
        LineChannel.broadcast_to(@line, {line: @line, users:
        @line.waiting_users})
    end
  
    def destroy
        LineChannel.broadcast_to(@line, {line: @line, users:
        @line.waiting_users})
    end
  
  end 