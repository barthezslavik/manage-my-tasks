json.array!(@tasks) do |task|
  json.extract! task, :id, :name, :description, :project_id, :done, :deadline, :priority
end
