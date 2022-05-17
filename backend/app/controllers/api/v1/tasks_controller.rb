class Api::V1::TasksController < ApplicationController
  before_action :authenticate_user!
  
  # before_action :load_project, only: [:index, :show, :update, :destroy, :create]
  # before_action :set_task, only: [:show, :update, :destroy]

  # GET /api/v1/tasks
  def index
    @tasks = Task.all
    
    if current_user
      
      tasks_serialize = parse_json @tasks
      json_response "Projects in the index", true, tasks_serialize, :ok
    end
  end

   # GET /api/v1/tasks/1
  def show
    task_serialize = parse_json @task
    json_response "Show Book", true, task_serialize, :ok
  end

  # POST /api/v1/tasks
  def create
    task = Task.new(task_params)
    @task = @project.tasks.build(task_params)
    if @task.save
      task = parse_json @task
      json_response "create tasks", true, @task, :ok
    else
      json_response "Project creation error", false, {}, :unprocessable_entity
    end

  end

  # PATCH/PUT /api/v1/tasks/1
  def update
    if @task.update(task_params)
      task = parse_json @task
      json_response "update task", true, task, :ok
    else
      json_response @task.errors, false, {}, :failure
    end
  end

  # DELETE /api/v1/tasks/1
  def destroy

    if @task.destroy
        @task = parse_json @task
        json_response "deleted Task", true, {}, :ok
      else
        json_response "Task deletion error", false, {}, :failure
    end
    
  end

  private
  
  def set_task
    @task = Task.find(params[:id])
  end
  
  def task_params
    params.fetch(:task).permit(:name, :description)
  end

  def load_project
    @project = Project.first
  end

end