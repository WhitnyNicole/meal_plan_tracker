class MealsController < ApplicationController
before_action :set_meal, only: [:show, :edit]

def index
  if params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
    @meals = mealplan.meals
    # @meals = Meal.all.favorite
  else
    @meals = current_user.meals
  end
end

def new
  redirect_if_not_logged_in
  if current_user && params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
    @meal = mealplan.meals.build
  else
    @meal = Meal.new
    # @meal.build_meal_plan
  end
end

def create
  @meal = current_user.meals.build(meal_params)
  if @meal.save
    flash[:success] = "Your meal was created!"
    # redirect_to meal_plan_path(@meal.meal_plan)
    redirect_to meal_path(@meal)
  else
    # @meal.build_meal_plan unless @meal.meal_plan
    render :new
  end
end

def show
redirect_if_not_logged_in
end

def edit
redirect_if_not_logged_in
end

def update
  set_meal
  redirect_if_not_logged_in
  if @meal.update(meal_params)
    flash[:success] = "Your meal was updated!"
    redirect_to meal_path(@meal)
  else
    render :edit
  end
end

def destroy
  set_meal
  redirect_if_not_logged_in
  @meal.destroy
  flash[:success] = "Your meal was deleted!"
  redirect_to meals_path
end


private
  def meal_params
    params.require(:meal).permit(:food, :day, :favorite, :meal_plan_id)
  end

  def set_meal
    @meal = Meal.find_by(id: params[:id])
    # if !@meal
    #   redirect_to meals_path
    # end
  end
end
