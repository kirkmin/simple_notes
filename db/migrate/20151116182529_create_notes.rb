class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
    	t.string :name, null: false
    	t.string :time, null: false
    	t.text :body, null: false

      t.timestamps null: false
    end
  end
end
