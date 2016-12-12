class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
    story_id: params[:story_id],
    liker_id: current_user.id
    )
    if @like.save
      @story = @like.story
      render "api/stories/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.where(story_id: params[:story_id]).where(liker_id: current_user.id).first
    story_id = @like.story.id
    @like.destroy
    @story = Story.find(story_id)
    render "api/stories/show"
  end
end
