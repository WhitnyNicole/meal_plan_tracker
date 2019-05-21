class MealPlansController < ApplicationController
  before_action :set_meal_plan, only: [:edit, :update, :show, :destroy]

  def index
    @meal_plans = MealPlan.all
  end

  def show
  end

  def new
    @meal_plan = MealPlan.new
  end

  def create
    @meal_plan = current_user.meal_plans.build(meal_plan_params)
    # @meal_plan = MealPlan.new(meal_plan_params)
    if @meal_plan.save
      flash[:success] = "Your meal plan was created!"
      params[:id] = @meal_plan.id
      redirect_to meal_plan_path(@meal_plan)
    else
      flash[:error] = "Sorry, there was an error creating your meal plan!"
      render :new
    end
  end


  def edit
  end

  def update
    if @meal_plan.update(meal_plan_params)
      flash[:success] = "Your changes were saved!"
      redirect_to meal_plan_path(@meal_plan)
    else
      flash[:error] = "Sorry, there was an error updating your meal plan!"
      render :edit
    end
  end

  def destroy
    @meal_plan.destroy
    flash[:success] = "Your meal plan was deleted!"
    redirect_to meal_plans_path
  end

private

  def meal_plan_params
    params.require(:meal_plan).permit(:goal, :description)
  end

  def set_meal_plan
    @meal_plan = MealPlan.find(params[:id])
  end

end
