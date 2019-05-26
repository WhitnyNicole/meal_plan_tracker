class Meal < ApplicationRecord
  belongs_to :meal_plan
  has_many :meal_schedules

  validates :food, :day, presence: true

  accepts_nested_attributes_for :meal_plan, reject_if: :all_blank

end
