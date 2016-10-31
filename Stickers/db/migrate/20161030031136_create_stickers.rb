class CreateStickers < ActiveRecord::Migration[5.0]
  def change
    create_table :stickers do |t|
      t.string :title
      t.string :date #See if there is a time data type
      t.text :content
      t.string :color
      t.timestamps
    end
  end
end
