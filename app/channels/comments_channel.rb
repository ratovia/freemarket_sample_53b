class CommentsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "comment_channel"
    item = Item.find(params[:item_id])
    stream_for item
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
