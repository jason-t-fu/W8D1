class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(user)
      render json: {}
    else
      render json: ["Incorrect credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: "Unable to log out", status: 404
    end
  end
end
