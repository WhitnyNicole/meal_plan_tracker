class MealPlansController < ApplicationController
  before_action :set_meal_plan, only: [:edit, :update, :show, :delete, :like]
  before_action :redirect_if_not_logged_in, only: [:new, :create, :edit, :update]
  before_action :require_same_user, only: [:edit, :update, :delete]
  before_action :require_user_like, only: [:like]
  def index
    # @meal_plans = current_user.meal_plans
    @meal_plans = current_user.meal_plans.paginate(page: params[:page], per_page: 2)
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @meal_plans, status: 200 }
    end
  end

  def like
    like = Like.create(like: params[:like], user: current_user, meal_plan: @meal_plan)
    if like.valid?
      respond_to do |format|
        format.html { redirect_to meal_plan_path(@meal_plan)  }
        format.json { render json: @meal_plan, status: 200 }
      end
      # flash[:success] = "Your selection was succesful"
      # redirect_to :back
    else
      flash[:danger] = "You can only like/dislike a meal plan once"
      # redirect_to :back
      redirect_to meal_plans_path
    end
  end

  def show
  end

  def new
    @meal_plan = MealPlan.new
    @meal_plan.meal_schedules.build
    @meal = Meal.new
  end

  def create
    @meal_plan = current_user.meal_plans.build(meal_plan_params)
    # @meal_plan = MealPlan.new(meal_plan_params)
    # @meal_plan.user = current_user

    if @meal_plan.save
      flash[:success] = "Your meal plan was created!"
      ms = MealSchedule.new(meal_schedule_params)
      ms.meal_plan = @meal_plan
      ms.save
      redirect_to meal_plan_path(@meal_plan)
    else
      render :new
    end
  end


  def edit
  end

  def update
    if @meal_plan.update(meal_plan_params)
      respond_to do |format|
        format.html { redirect_to meal_plan_path(@meal_plan)}
        format.json { render json: @meal_plan, status: 200 }
      end
      # flash[:success] = "Your changes were saved!"
      # redirect_to meal_plan_path(@meal_plan)
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
    params.require(:meal_plan).permit(:goal, :description, :rating)
  end

  def meal_schedule_params
    params.require(:meal_plan).require(:meal_schedule).permit(:eating_time, :meal_type, :meal_id,
      meal: [:protein, :vegetable, :side, :beverage, :beverage_ounces, :favorite, :day])
  end

  def set_meal_plan
    @meal_plan = MealPlan.find(params[:id])
    if @meal_plan.nil?
      flash[:danger] = "Meal Plan not Found!"
      redirect_to meal_plans_path
    end
  end

  def require_same_user
    if current_user.id != @meal_plan.user_id
      flash[:danger] = "You can only edit or delete your own meal plan"
      redirect_to meal_plans_path
    end
  end

  def require_user_like
    if !logged_in?
    flash[:danger] = "You must be logged in to perform that action"
    redirect_to :back
    end
  end
end
