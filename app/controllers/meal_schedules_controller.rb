class MealSchedulesController < ApplicationController
before_action :set_meal_schedules, only: [:show, :edit]
before_action :redirect_if_not_logged_in, only: [:new, :create, :edit, :update]
before_action :require_same_user, only: [:edit, :update, :delete]

  def index
    if params[:meal_id] && meal = Meal.find_by_id(params[:meal_id])
      @meal_schedules = meal.meal_schedules
    else
      @meal_schedules = MealSchedule.all
      # redirect_to meal_schedules_path
    end
  end

  def show
  end

  def new
    if params[:meal_id] && meal = Meal.find_by_id(params[:meal_id])
      @meal_schedule = meal.meal_schedules.build
    else
      @meal_schedule = MealSchedule.new
    end
  end

  def create
    # @meal_schedule = MealSchedule.new(meal_schedule_params)
    @meal_schedule = current_meal.meal_schedules.build(meal_schedule_params)
    if @meal_schedule.save
      flash[:success] = "Your meal schedule was created!"
      redirect_to meal_path(@meal_schedule.meal)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @meal_schedule.update(meal_schedule_params)
      flash[:success] = "Your meal schedule was updated!"
      redirect_to meal_schedule_path(@meal_schedule)
    else
      render :edit
    end
  end

  def destroy
    @meal_schedule.destroy
    flash[:success] = "Your meal schedule was deleted!"
    redirect_to meal_schedules_path
  end

  private

    def meal_schedule_params
      params.require(:meal_schedule).permit(:eating_time, :meal_type, :meal_id, :meal_plan_id)
    end

    def set_meal_schedules
      @meal_schedule = MealSchedule.find(params[:id])
    end

    def require_same_user
      if current_user.id != @meal_schedule.meal_plan.user_id
        flash[:danger] = "You can only edit or delete your own meal schedule"
        redirect_to meal_schedules_path
      end
    end

end
