class RenameFoodInMealsToProtein < ActiveRecord::Migration[5.0]
  def change
    rename_column :meals, :food, :protein
  end
end
