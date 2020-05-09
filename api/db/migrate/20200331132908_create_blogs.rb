class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title, null: false
      t.string :og_image, null: false
      t.text :description, null: false
      t.text :content, null: false
      t.integer :status, null:false, default: 0
      t.timestamps
    end
  end
end
