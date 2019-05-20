class MealsController < ApplicationController

def index
  @meals = Meal.all
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
  @meal = Meal.find(params[:id])
end

def edit
  @meal = Meal.find(params[:id])
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


end