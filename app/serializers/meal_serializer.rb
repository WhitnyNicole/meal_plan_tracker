class MealSerializer < ActiveModel::Serializer
  attributes :id, :protein, :vegetable, :side, :beverage, :pretty_created_date
  has_many :meal_schedules
  has_many :meal_plan through: :meal_schedules 
end
