class AddVegetablesToMeals < ActiveRecord::Migration[5.0]
  def change
    add_column :meals, :vegetable, :string
  end
end
