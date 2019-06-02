Specifications for the Rails Assessment

Specs:

[X] Using Ruby on Rails for the project
[X] Include at least one has_many relationship (A User has_many meal_plans, a Meal plan has_many meals and a Meal has_many meal schedules)
[X] Include at least one belongs_to relationship (A Meal plan belongs_to a User, a Meal belongs_to a Meal Plan, a Meal Schedule belongs to a Meal and Meal Plan)
[X] Include at least two has_many through relationships (A User has_many meals through Meal plans, and a Meal Plan has_many meal schedules through Meals)
[X] Include at least one many-to-many relationship (A User has_many meals through Meal plans, and a Meal Plan has_many meal schedules through Meals)
[] The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user ()
[] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
[] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
[X] Include signup (how e.g. Devise)
[X] Include login (how e.g. Devise)
[X] Include logout (how e.g. Devise)
[X] Include third party signup/login (how e.g. Devise/OmniAuth)
[X] Include nested resource show or index (URL e.g. users/2/recipes)
[X] Include nested resource "new" form (URL e.g. recipes/1/ingredients/new)
[X] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:

[X] The application is pretty DRY
[X] Limited logic in controllers
[] Views use helper methods if appropriate
[X] Views use partials if appropriate
