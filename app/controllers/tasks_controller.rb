class TasksController < InheritedResources::Base
  respond_to :json
  
  def index
    @tasks = Task.where(project_id: params[:project_id])
  end

  private
    def permitted_params
      params.permit task: [:name, :project_id, :description]
    end
end
