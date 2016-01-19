class ProjectsController < InheritedResources::Base
  respond_to :json
  #load_and_authorize_resource
  
  private
    def permitted_params
      params.permit project: [:name, :description]
    end
end
