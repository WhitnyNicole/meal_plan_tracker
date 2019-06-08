# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.where(name: "Whitny").first_or_create do |user|
    user.email = "wne4e2@gmail.com"
    user.password = "password"
    user.password_confirmation = "password"
  end


mealplan = MealPlan.where(goal: "Tone").first_or_create do |mealplan|
          mealplan.description = "Regular"
          mealplan.user_id = "1"
        end

meal = Meal.where(protein: "burger").first_or_create do |meal|
      meal.favorite = "true"
      meal.day = Date.today
      meal.beverage = "diet coke"
      meal.beverage_ounces = "20"
      meal.vegetable = "spinach"
      meal.side = "french fries"
    end

mealschedule = MealSchedule.where(eating_time: "afternoon").first_or_create do |mealschedule|
          mealschedule.meal_type = "lunch"
          mealschedule.meal_plan_id = "1"
          mealschedule.meal_id = "1"
    end
