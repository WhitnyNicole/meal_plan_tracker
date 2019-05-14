class MealPlansController < ApplicationController
  before_action :set_meal_plan, only: [:edit, :update, :show, :destroy]

  def index
    @meal_plans = Meal_plan.all
  end

  def show
  end

  def new
    @meal_plan = Meal_plan.new
  end

  def create
    @meal_plan = current_user.meal_plans.build(meal_plan_params)
    if @meal_plan.save
      redirect_to meal_plan_path(@meal_plan)
    else
      render :new
    end
  end


  def edit
  end

  def update
    if @meal_plan.update(meal_plan_params)
      redirect_to meal_plan_path(@meal_plan)
    else
      render :edit
    end
  end

  def destroy
    @meal_plan.destroy
    redirect_to meal_plans_path
  end

private

  def meal_plan_params
    params.require(:meal_plan).permit(:goal, :type)
  end

  def set_meal_plan
    @meal_plan = Meal_plan.find(params[:id])
  end

end
