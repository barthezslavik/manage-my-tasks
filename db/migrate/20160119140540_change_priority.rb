class ChangePriority < ActiveRecord::Migration
  def change
    remove_column :tasks, :priority 
    add_column :tasks, :priority, :string
  end
end
