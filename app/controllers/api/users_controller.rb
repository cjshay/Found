class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      coolcat = User.find_by_username("coolcat")
      sign_in(@user)
      User.all.each do |user|
        Follow.create(follower_id: @user.id, followee_id: user.id)
      end
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image)
  end
end
