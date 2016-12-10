class Api::StoriesController < ApplicationController
  def index
      @stories = Story.where(parent_id: nil)
  end

  def show
    @story = Story.find(params[:id])
    if @story
      render :show
    else
      render json: ["There is no story at this address"], status: 404
    end
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = Story.find(params[:id])
    if story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    render json: {}
  end

  private
  def story_params
    params.require(:story).permit(:title, :content, :author_id, :parent_id)
  end
end
