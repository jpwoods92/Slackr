class LineChannel < ApplicationCable::Channel
    def subscribed
        @line = Line.find_by(id: params[:room])
        stream_for @line
    end

    def received(data)
        LineChannel.broadcast_to(@line, {line: @line, users: @line.waiting_users}) #the second argument is the data we will be broadcasting to the frontend
    end

    def unsubscribed
    end

end