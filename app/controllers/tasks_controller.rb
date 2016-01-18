class TasksController < InheritedResources::Base
  respond_to :json
  
  private
    def permitted_params
      params.permit task: [:name, :description]
    end
end
