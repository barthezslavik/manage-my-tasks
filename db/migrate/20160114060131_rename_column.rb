class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :tasks, :task_id, :project_id
  end
end
