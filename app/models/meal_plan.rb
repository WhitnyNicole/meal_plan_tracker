class MealPlan < ApplicationRecord
  belongs_to :user
  has_many :meals_schedules, dependent: :destroy
  has_many :meals, through: :meal_schedules, dependent: :destroy
  accepts_nested_attributes_for :meal_schedules, reject_if: :all_blank


  validates :goal, :description, presence: true
  default_scope -> { order(updated_at: :desc)}


end
