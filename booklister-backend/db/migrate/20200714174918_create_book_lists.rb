class CreateBookLists < ActiveRecord::Migration[6.0]
  def change
    create_table :book_lists do |t|
      t.integer :book_id
      t.integer :list_id

      t.timestamps
    end
  end
end
