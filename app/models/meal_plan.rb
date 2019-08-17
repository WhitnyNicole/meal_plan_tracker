class MealPlan < ApplicationRecord
  belongs_to :user
  has_many :meal_schedules, dependent: :destroy
  has_many :meals, through: :meal_schedules, dependent: :destroy
  has_many :likes, dependent: :destroy
  # accepts_nested_attributes_for :meal_schedules, reject_if: :all_blank


  validates :goal, :description, presence: true
  default_scope -> { order(updated_at: :desc)}

  def thumbs_up_total
    self.likes.where(like: true).size
  end

  def thumbs_down_total
    self.likes.where(like: false).size
  end

end
