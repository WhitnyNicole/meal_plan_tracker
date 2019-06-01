module ApplicationHelper
  def current_user
      @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    end

  def logged_in?
    !!session[:user_id]
      # !!@current_user
  end

  def current_meal
    @current_meal ||= Meal.find_by_id(params[:meal_id]) if params[:meal_id]
  end
end
