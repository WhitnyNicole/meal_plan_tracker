class MealSerializer < ActiveModel::Serializer
  attributes :id, :protein, :vegetable, :side, :beverage
  
end
