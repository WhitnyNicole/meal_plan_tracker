class Meal < ApplicationRecord
  belongs_to :meal_plan
  has_many :meal_schedules

  validates :food, :day, presence: true
  validates :meal_plan_id, presence: true

  # accepts_nested_attributes_for :meal_plan, reject_if: :all_blank
  #
  # def meal_plan_attributes=(attributes)
  #   mealplan = MealPlan.find_or_create_by(attributes)
  #   self.mealplan = mealplan if mealplan.valid?
  # end

end
