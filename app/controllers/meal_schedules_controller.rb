class MealSchedulesController < ApplicationController
before_action :set_meal_schedules, only: [:show, :edit]
before_action :redirect_if_not_logged_in, only: [:new, :create, :edit, :update, :show]
before_action :require_same_user, only: [:edit, :update, :delete]

  def index
    if params[:meal_plan_id] && mealplan = MealPlan.find_by_id(params[:meal_plan_id])
      @meal_schedules = mealplan.meal_schedules.paginate(page: params[:page], per_page: 2)
    else
      # @meal_schedules = MealSchedule.all.paginate(page: params[:page], per_page: 2)
      @meal_schedules = current_user.meal_schedules.paginate(page: params[:page], per_page: 2)
      # @meal_schedules = MealSchedule.paginate(page: params[:page], per_page: 2)
      # redirect_to meal_schedules_path
    end
  end

  def new
    redirect_if_not_logged_in
    if current_user && params[:meal_plan_id] && @mealplan = MealPlan.find_by_id(params[:meal_plan_id])
      @meal_schedule = @mealplan.meal_schedules.build
      @meal_schedule.build_meal
    else
      @meal_schedule = MealSchedule.new
      @meal_schedule.build_meal
    end
  end

    def create
      @meal_schedule = current_meal_plan.meal_schedules.build(meal_schedule_params)
      # binding.pry
      # @meal_schedule = current_meal.meal_schedules.build(meal_schedule_params)
      if @meal_schedule.save
        flash[:success] = "Your meal schedule was created!"
        redirect_to meal_schedule_path(@meal_schedule)
      else
        @meal_schedule.build_meal unless @meal_schedule.meal
        render :new
      end
    end

  def show
  end

  def edit
  end

  def update
    set_meal_schedules
    if @meal_schedule.update(meal_schedule_params)
      flash[:success] = "Your meal schedule was updated!"
      redirect_to meal_schedule_path(@meal_schedule)
    else
      render :edit
    end
  end

  def destroy
    set_meal_schedules
    @meal_schedule.destroy
    flash[:success] = "Your meal schedule was deleted!"
    redirect_to meal_schedules_path
  end

  private

    def meal_schedule_params
      params.require(:meal_schedule).permit(:eating_time, :meal_type, :meal_plan_id, :meal_id, meal_attributes: [:protein, :day, :beverage, :beverage_ounces, :side, :vegetable])
    end

    def set_meal_schedules
      @meal_schedule = MealSchedule.find_by(id: params[:id])
    end

    def require_same_user
      set_meal_schedules
      if current_user.id != @meal_schedule.meal_plan.user_id
        flash[:danger] = "You can only edit or delete your own meal schedule"
        redirect_to meal_schedules_path
      end
    end
  end
