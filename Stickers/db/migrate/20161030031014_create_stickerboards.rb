class CreateStickerboards < ActiveRecord::Migration[5.0]
  def change
    create_table :stickerboards do |t|
      t.string :board_name
      t.timestamps
    end
  end
end
