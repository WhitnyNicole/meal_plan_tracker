class MealSchedule < ApplicationRecord
  belongs_to :meal
  belongs_to :meal_plan
end
