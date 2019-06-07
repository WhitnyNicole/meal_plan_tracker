class Meal < ApplicationRecord
  belongs_to :meal_plan
  has_many :meal_schedules
  # has_many :meal_plans, through: :meal_schedules

  validates :protein, :vegetable, :side, :day, :beverage, :beverage_ounces, presence: true
  validates :meal_plan_id, presence: true
  validates_inclusion_of:favorite, in: [true, false]

  scope :favorite, -> { where(favorite: true)}
  default_scope -> { order(updated_at: :desc)}

  #
  # def self.favorite
  #   binding.pry
  #   return Meal.where(favorite: true) unless Meal.all.empty?
  # end



  # accepts_nested_attributes_for :meal_plan, reject_if: :all_blank
  #
  # def meal_plan_attributes=(attributes)
  #   mealplan = MealPlan.find_or_create_by(attributes)
  #   self.mealplan = mealplan if mealplan.valid?
  # end

end
