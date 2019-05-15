class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

private
    # def logged_in?
    #    session.has_key?(:user_id)
    #   end

    def current_user
      @current_user ||= User.find(session[:user_id])
    end

    def current_meal_plan
      @current_meal_plan||= MealPlan.find(params[:id])
    end
end
