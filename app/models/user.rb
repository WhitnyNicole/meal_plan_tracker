class User < ApplicationRecord
  has_secure_password
  has_many :meal_plans
  has_many :meals, through: :meal_plans
  has_many :meal_schedules, through: :meals
  has_many :likes, dependent: :destroy

  validates :name, :email, presence: true
  validates :email, uniqueness: true

end
