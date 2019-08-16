class Like < ApplicationRecord

belongs_to :user
belongs_to :meal_plan
# validates_uniqueness_of :user, scope: :meal_plan
end
