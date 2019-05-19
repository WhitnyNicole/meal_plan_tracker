class Meal < ApplicationRecord
  belongs_to :meal_plan, optional: true 
  has_many :meal_schedules

  validates :food, :day, presence: true
end
