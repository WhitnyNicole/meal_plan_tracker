class MealsController < ApplicationController
before_action :set_meal, only: [:show]
before_action :redirect_if_not_logged_in, only: [:show]
# before_action :require_same_user, only: [:edit, :update, :delete]

def index
  if params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
    @meals = mealplan.meals.paginate(page: params[:page], per_page: 2)
    # @meals = Meal.paginate(page: params[:page], per_page: 5)
  else
    @meals = current_user.meals.paginate(page: params[:page], per_page: 2)
  end
end

# def new
#   redirect_if_not_logged_in
#   if current_user && params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
#     @meal = mealplan.meals.build
#   else
#     @meal = Meal.new
#     # @meal.build_meal_plan
#   end
# end

# def create
#   @meal = Meal.new(meal_params)
#   binding.pry
#   if @meal.save
#     flash[:success] = "Your meal was created!"
#     # redirect_to meal_plan_path(@meal.meal_plan)
#     redirect_to meal_path(@meal)
#   else
#     # @meal.build_meal_plan unless @meal.meal_plan
#     render :new
#   end
# end

def show
end

def edit
end

# def update
#   set_meal
#   redirect_if_not_logged_in
#   if @meal.update(meal_params)
#     flash[:success] = "Your meal was updated!"
#     redirect_to meal_path(@meal)
#   else
#     render :edit
#   end
# end

# def destroy
#   set_meal
#   redirect_if_not_logged_in
#   @meal.destroy
#   flash[:success] = "Your meal was deleted!"
#   redirect_to meals_path
# end


private
  def meal_params
    params.require(:meal).permit(:protein, :day, :vegetable, :side, :beverage_ounces, :beverage, :favorite)
  end

  def set_meal
    @meal = Meal.find_by(id: params[:id])
    # if !@meal
    #   redirect_to meals_path
    # end
  end

  # def require_same_user
  #   set_meal
  #   if current_user != @meal.user
  #     flash[:danger] = "You can only edit or delete your own meal"
  #     redirect_to meals_path
  #   end
  # end
end
