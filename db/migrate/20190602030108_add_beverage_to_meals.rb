class AddBeverageToMeals < ActiveRecord::Migration[5.0]
  def change
    add_column :meals, :beverage, :string
  end
end
