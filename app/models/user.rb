class User < ApplicationRecord
  has_secure_password
  has_many :meal_plans
  has_many :meals, through: :meal_plans

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
