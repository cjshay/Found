class Api::UsersController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"]
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render json: {}
    else
      render(json: ["No user is signed in"])
    end

  end


end
