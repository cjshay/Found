Api::ResponsesController < ApplicationController
  def index
    @stories = Story.where(parent_id: params[:id])
    render "api/stories/index"
  end
end
