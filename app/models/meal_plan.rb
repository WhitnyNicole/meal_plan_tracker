class MealPlan < ApplicationRecord
  belongs_to :user
  has_many :meals, dependent: :destroy
  has_many :meal_schedules, through: :meals, dependent: :destroy 

  validates :goal, :description, presence: true
  default_scope -> { order(updated_at: :desc)}
end
