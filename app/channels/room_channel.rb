class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    channel_name = "server#{params[:id]}"
    stream_for channel_name
  end

  def speak(data)
    channel_name = "server#{data['id']}"
    obj = {server: data['server'], rooms: data['rooms']}
    RoomChannel.broadcast_to(channel_name, obj)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
