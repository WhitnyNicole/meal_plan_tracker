class MealPlansController < ApplicationController
  before_action :set_meal_plan, only: [:edit, :update, :show, :destroy]
  before_action :redirect_if_not_logged_in, only: [:new, :create, :edit, :update]
  before_action :require_same_user, only: [:edit, :update, :delete]

  def index
    # @meal_plans = current_user.meal_plans
    @meal_plans = current_user.meal_plans.paginate(page: params[:page], per_page: 2)

  end

  def show
  end

  def new
    redirect_if_not_logged_in
      @mealplan = MealPlan.new
      # @mealplan.meal_schedules.build
      # @meal = Meal.new
  end

  def create
    @meal_plan = current_user.meal_plans.build(meal_plan_params)
    # @meal_plan = MealPlan.new(meal_plan_params)
    # @meal_plan.user = current_user
    if @meal_plan.save
      flash[:success] = "Your meal plan was created!"
      params[:id] = @meal_plan.id
      redirect_to meal_plan_path(@meal_plan)
    else
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
      render :edit
    end
  end

  def destroy
    @meal_plan.destroy
    flash[:success] = "Your meal plan and all associated meals were deleted!"
    redirect_to meal_plans_path
  end

private

  def meal_plan_params
    params.require(:meal_plan).permit(:goal, :description, :meal_schedule_id, meal_schedule_attributes: [:eating_time, :meal_type])
  end

  def set_meal_plan
    @meal_plan = MealPlan.find(params[:id])
  end

  def require_same_user
    if current_user.id != @meal_plan.user_id
      flash[:danger] = "You can only edit or delete your own meal plan"
      redirect_to meal_plans_path
    end
  end

end
