class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

private
    def logged_in?
       session.has_key?(:user_id)
      end

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def redirect_if_not_logged_in
    if !logged_in?
      flash[:errors] = "You must be logged in to view the page you tried to view."
      redirect_to '/'
    end
  end
end
