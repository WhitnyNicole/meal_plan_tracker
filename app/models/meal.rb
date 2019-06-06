class Meal < ApplicationRecord
  has_many :meal_schedules, dependent: :destroy
  has_many :meal_plans, through: :meal_schedules, dependent: :destroy

  validates :protein, :vegetable, :side, :day, :beverage, :beverage_ounces, presence: true
  validates_inclusion_of:favorite, in: [true, false]

  scope :favorite, -> { where(favorite: true) }
  default_scope -> { order(updated_at: :desc)}


  # def find_favorite
  #   return Meal.favorite
  # end



  # accepts_nested_attributes_for :meal_plan, reject_if: :all_blank
  #
  # def meal_plan_attributes=(attributes)
  #   mealplan = MealPlan.find_or_create_by(attributes)
  #   self.mealplan = mealplan if mealplan.valid?
  # end

end
