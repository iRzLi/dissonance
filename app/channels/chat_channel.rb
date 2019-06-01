class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    channel_name = "room#{params[:id]}"
    stream_for channel_name
  end

  def speak(data)
    channel_name = "room#{data['id']}"
    ChatChannel.broadcast_to(channel_name, data['message'])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
