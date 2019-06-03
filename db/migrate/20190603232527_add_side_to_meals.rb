class AddSideToMeals < ActiveRecord::Migration[5.0]
  def change
    add_column :meals, :side, :string
  end
end
