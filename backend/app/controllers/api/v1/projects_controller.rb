class Api::V1::ProjectsController < ApplicationController
  
	before_action :set_project, only: [:show, :update, :destroy]

  # GET /api/v1/projects
	def index
		@projects = Project.all
    projects_serialize = parse_json @projects
    json_response "Projects in the index", true, projects_serialize, :ok
	end

   # GET /api/v1/projects/1
  def show
    project_serialize = parse_json @project
    json_response "Show Book", true, project_serialize, :ok
  end

  # POST /api/v1/projects
  def create
    @project = Project.new(project_params)
    if @project.save
      project = parse_json @project
      json_response "create projects", true, project, :ok
    else
      json_response "Project creation error", false, {}, :unprocessable_entity
    end

  end

  # PATCH/PUT /api/v1/projects/1
  def update
    if @project.update(project_params)
      project = parse_json @project
      json_response "update project", true, project, :ok
    else
      json_response @project.errors, false, {}, :failure
    end
  end

  # DELETE /api/v1/projects/1
  def destroy

    if @project.destroy
        @project = parse_json @project
        json_response "deleted Project", true, {}, :ok
      else
        json_response "Project deletion error", false, {}, :failure
    end
    
  end


  private
  
  def set_project
    @project = Project.find(params[:id])
  end
  
  def project_params
    	params.fetch(:project).permit(:name, :description)
  end

end