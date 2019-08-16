class MealPlanSerializer < ActiveModel::Serializer
  attributes :id, :goal, :description, :likes
  has_many :meal_schedules
  has_many :meals, through: :meal_schedules
end
