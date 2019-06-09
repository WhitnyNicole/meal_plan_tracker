Specifications for the Rails Assessment

Specs:

[X] Using Ruby on Rails for the project
[X] Include at least one has_many relationship (A User has_many meal_plans, a MealPlan has_many meal_schedules and a Meal has_many meal schedules)
[X] Include at least one belongs_to relationship (A MealPlan belongs_to a User, a MealSchedule belongs_to a Meal and MealPlan)
[X] Include at least two has_many through relationships (A MealPlan has_many meals through: :meal_schedules and a Meal has_many meal_plans through: :meal_schedules)
[X] Include at least one many-to-many relationship (A meal_plan has many meals and a meal has many meal_plans)
[X] The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user (MealSchedule is my join table and has two submittable attributes: eating_time and meal_type)
[X] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
[X] Include a class level ActiveRecord scope method (scope method to see all meals that are favorites)
[X] Include signup
[X] Include login
[X] Include logout
[X] Include third party signup/login (FaceBook)
[X] Include nested resource show or index
[X] Include nested resource "new" form
[X] Include form display of validation errors

Confirm:

[X] The application is pretty DRY
[X] Limited logic in controllers
[X] Views use helper methods if appropriate
[X] Views use partials if appropriate
