class ProjectsController < InheritedResources::Base
  respond_to :json
  
  private
    def project_params
      params.require(:project).permit(:name, :description)
    end
end
