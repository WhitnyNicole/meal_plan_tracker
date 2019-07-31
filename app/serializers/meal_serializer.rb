class MealSerializer < ActiveModel::Serializer
  attributes :id, :protein, :vegetable, :side, :beverage
  has_many :meal_schedules
end
