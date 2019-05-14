class MealSchedule < ApplicationRecord
  belongs_to :meal
  belongs_to :meal_plan

  validates :eating_time, :meal_type, presence: true
end
