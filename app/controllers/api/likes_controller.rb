class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
    story_id: params[:story_id],
    liker_id: current_user.id
    )
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy
    @like = Story.find(params[:story_id]).likes.last
    @like.destroy
    render json: {}
  end
end
