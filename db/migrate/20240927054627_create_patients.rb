class CreatePatients < ActiveRecord::Migration[7.2]
  def change
    create_table :patients do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :age
      t.string :gender
      t.string :contact

      t.timestamps
    end
  end
end
