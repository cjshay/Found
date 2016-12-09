class Api::ResponsesController < ApplicationController
  def index
    debugger
    @stories = Story.where(parent_id: params[:parent_id])
    render "api/stories/index"
  end
end
