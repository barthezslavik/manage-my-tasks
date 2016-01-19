class ChangeDeadline < ActiveRecord::Migration
  def change
    remove_column :tasks, :deadline
    add_column :tasks, :deadline, :string
  end
end
