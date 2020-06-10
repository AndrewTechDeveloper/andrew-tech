class CreateBlogTags < ActiveRecord::Migration[6.0]
  def change
    create_table :blog_tags do |t|
      t.integer :blog_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
  end
end
