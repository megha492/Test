require 'rails_helper'

RSpec.describe Api::V1::TasksController, type: :controller do

  describe "GET #index" do
    it "returns a success response" do
      project = FactoryGirl.create(:project)
      get :index, params: {project_id: project.id }
      expect(response).to be_successful
    end
  end

  describe "POST #create" do

    project = FactoryGirl.create(:project)

    context "with valid params" do
      subject { post :create, params: {project_id: project.id, task: {name: "ProjNewName1"}} }
      it "creates a new task" do
        expect { subject }.to change(Task, :count).by(1)
      end
    end

    context "with invalid params" do
      subject { post :create, params: {project_id: project.id, task: {name: ""}} }
      it "does not create a task" do
        expect { subject }.to change(Task, :count).by(0)
      end
    end
  end

  describe "PUT #update" do
    project = FactoryGirl.create(:project)
    task = FactoryGirl.create(:task, project: project) 

    context "with valid params" do
      it "updates the requested project" do
        put :update, params: {project_id: project.id, id: task.id, task: {name: "ProjNewName1"}}
        expect(Task.where(id: task.id).first.name).to be == "ProjNewName1"
      end
    end
  end

  describe "DELETE #destroy" do
    project = FactoryGirl.create(:project)
    task = FactoryGirl.create(:task, project: project) 

    it "destroys the requested project" do
      expect {
        delete :destroy, params: {
          project_id: project.id,
          id: task.id
        }
      }.to change(Task, :count).by(-1)
    end
  end
  
end
