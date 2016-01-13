class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.integer :task_id
      t.boolean :done
      t.date :deadline

      t.timestamps
    end
  end
end
