class MealPlan < ApplicationRecord
  belongs_to :user
  has_many :meals
  has_many :meal_schedules, through: :meals

  validates :goal, :description, presence: true
end
