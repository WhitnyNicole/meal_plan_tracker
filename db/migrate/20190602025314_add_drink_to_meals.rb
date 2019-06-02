class AddDrinkToMeals < ActiveRecord::Migration[5.0]
  def change
    add_column :meals, :drink, :integer
  end
end
