class AddRatingToMealPlans < ActiveRecord::Migration[5.0]
  def change
    add_column :meal_plans, :rating, :integer, default: false
  end
end
