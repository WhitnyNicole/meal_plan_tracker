class MealsController < ApplicationController


def new
  @meal = Meal.new
end

def create
  @meal = current_meal_plan.meals.build(meal_params)
  if @meal.save
    redirect to meal_path(@meal)
  else
    render :new
  end
end

def show
  @meal = Meal.find(params[:id])
end

private
  def meal_params
    params.require(:meal).permit(:food, :day)
  end


end
