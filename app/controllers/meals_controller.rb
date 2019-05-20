class MealsController < ApplicationController
before_action :set_meal, only: [:show, :edit]
def index
  if params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
    @meals = mealplan.meals 
  else
    @meals = Meal.all
  end
end

def new
  if params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
    @meal = mealplan.meals.build
  else
    @meal = Meal.new
  end
end

def create
  @meal = current_user.meals.build(meal_params)
  if @meal.save
    redirect_to meal_path(@meal)
  else
    render :new
  end
end

def show
end

def edit
end

def update
  if @meal.update(meal_params)
    redirect_to meal_path(@meal)
  else
    render :edit
  end
end

def destroy
  @meal.destroy
  redirect_to meals_path
end


private
  def meal_params
    params.require(:meal).permit(:food, :day, :meal_plan_id)
  end

  def set_meal
    @meal = Meal.find(params[:id])
  end
end
