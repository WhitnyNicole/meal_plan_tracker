class RemoveMealPlanIdFromMeals < ActiveRecord::Migration[5.0]
  def change
    remove_column :meals, :meal_plan_id, :integer 
  end
end
