class ProjectsController < InheritedResources::Base
  respond_to :json
  
  private
    def permitted_params
      params.permit project: [:name, :description]
    end
end
