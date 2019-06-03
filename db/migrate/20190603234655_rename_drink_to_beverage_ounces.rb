class RenameDrinkToBeverageOunces < ActiveRecord::Migration[5.0]
  def change
    rename_column :meals, :drink, :beverage_ounces
  end
end
