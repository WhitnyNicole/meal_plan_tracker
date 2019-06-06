class MealSchedule < ApplicationRecord
  belongs_to :meal
  belongs_to :meal_plan

  validates :eating_time, :meal_type, presence: true
  default_scope -> { order(updated_at: :desc)}


   def meal_attributes=(attributes)
      meal = Meal.find_or_create_by(attributes)
      self.meal = meal if meal.valid? || !self.meal
   end

end
