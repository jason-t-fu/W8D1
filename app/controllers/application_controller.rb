class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by_credentials(params[:user][:username], params[:user][:password])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end