class MealSchedulesController < ApplicationController


  def index
    @meal_schedules = MealSchedule.all
  end

  def show
    @meal_schedule = MealSchedule.find(params[:id])
  end

  def new
    @meal_schedule = MealSchedule.new
  end

  def create
    @meal_schedule = MealSchedule.new(meal_schedule_params)
    if @meal_schedule.save
      redirect_to meal_schedule_path(@meal_schedule)
    else
      render :new
    end
  end

  def edit
    @meal_schedule = MealSchedule.find(params[:id])
  end

  def update
    if @meal_schedule.update(meal_schedule_params)
      redirect_to meal_schedule_path(@meal_schedule)
    else
      render :edit
    end
  end

  def destroy
    @meal_schedule.destroy
    redirect_to meal_schedules_path
  end

  private

    def meal_schedule_params
      params.require(:meal_schedule).permit(:eating_time, :meal_type, :meal_id, :meal_plan_id)
    end


end
