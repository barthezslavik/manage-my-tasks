json.array!(@tasks) do |task|
  json.extract! task, :id, :name, :description, :task_id, :done, :deadline
  json.url task_url(task, format: :json)
end
