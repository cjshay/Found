class Api::FollowsController < ApplicationController
  # api_user_follow DELETE /api/users/:user_id/follows/:id(.:format)  api/follows#destroy {:format=>:json}
  def create
    @follow = Follow.new(
    followee_id: params[:user_id],
    follower_id: current_user.id)
    if @follow.save
      @user = @follow.followee
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by_follower_id(current_user.id)
    followee_id = @follow.followee_id
    @follow.destroy
    @user = User.find(followee_id)
    render "api/users/show"
  end
end
