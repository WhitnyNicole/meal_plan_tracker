class UsersController < ApplicationController
# before_action :require_same_user, only: [:show]
before_action :redirect_if_not_logged_in, only: [:new, :create, :show]

# before_action :require_login

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome #{@user.name} to your Meal Tracker!"
      session[:user_id] = @user.id
      redirect_to user_path(@user)
      # redirect_to meal_plans_path(@meal_plan)
    else
      render :new
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    @user_mealplans = @user.meal_plans.paginate(page: params[:page], per_page: 2)
  end

private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  # def set_user
  #   @user = User.find(params[:id])
  # end

  # def require_login
  #   return head(:forbidden) unless session.include? :user_id
  # end

  # def require_same_user
  #   if current_user != @user
  #     flash[:danger] = "You can only view your own account!"
  #     redirect_to meals_path
  #   end
  # end
end
