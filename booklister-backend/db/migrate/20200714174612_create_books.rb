class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :note
      t.string :image_url, :default => "https://images.freeimages.com/images/large-previews/b9e/second-hand-books-1562964.jpg"

      t.timestamps
    end
  end
end
