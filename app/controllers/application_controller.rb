class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

private
    def logged_in?
       session.has_key?(:user_id)
      end

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def if_not_logged_in
      redirect_to '/' if !logged_in?
    end
end
