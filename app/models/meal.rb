class Meal < ApplicationRecord
  belongs_to :meal_plan
  has_many :meal_schedules
end
