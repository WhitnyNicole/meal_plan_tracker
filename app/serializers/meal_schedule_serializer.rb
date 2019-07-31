class MealScheduleSerializer < ActiveModel::Serializer
  attributes :id, :eating_time, :meal_type
  belongs_to :meal
end
