class UsersController < ApplicationController


  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "Welcome to your Meal Tracker!"
      session[:user_id] = @user.id
      redirect_to user_path(@user)
      # redirect_to meal_plans_path(@meal_plan)
    else
      flash[:error] = "Sorry, there was an error creating your account!"
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end


private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
