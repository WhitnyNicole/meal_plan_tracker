class MealSchedulesController < ApplicationController


  def index
    @meal_schedules = MealSchedule.all
  end

  def show
  end

  def new
    @meal_schedule = MealSchedule.new
  end

  def create
    @meal_schedule = current_meal.meal_schedules.build(meal_schedule_params)
    if @meal_schedule.save
      redirect_to meal_schedule_path(@meal_schedule)
    else
      render :new
    end
  end

  private

    def meal_schedule_params
      params.require(:meal_schedule).permit(:eating_time, :meal_type)
    end


end
