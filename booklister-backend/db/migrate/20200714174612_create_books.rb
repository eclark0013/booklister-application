class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :note
      t.string :image_url

      t.timestamps
    end
  end
end
