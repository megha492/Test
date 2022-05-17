require 'rails_helper'

RSpec.describe Api::V1::ProjectsController, type: :controller do

  describe "GET #index" do
    it "returns a success response" do
      get :index
      expect(response.status).to eq(200)
    end
  end

  describe "POST #create" do
    let(:project_params) { { name: 'First name' } }
    subject { post :create, params: { project: project_params } }

    context "with valid params" do
        let(:project_params) { { name: 'First name', description: 'Last name' } }
        it 'creates a new project' do
          expect { subject }.to change(Project, :count).by(1)
        end
      end

    context "with invalid params" do
      let(:project_params) { { description: 'Last name' } }
      it "does not create a project" do
        expect { subject }.to change(Project, :count).by(0)
      end
    end
  end

  describe "PUT #update" do

    project = FactoryGirl.create(:project)
    subject { put :update, params: {id: project.id, project: {name: "ProjNewName1"}} }

    context "with valid params" do
      it "updates the requested project" do
        subject
        expect(project.reload.name).to eq("ProjNewName1")
      end
    end
  end

  describe "DELETE #destroy" do

    project = FactoryGirl.create(:project)
    subject { delete :destroy, params: {id: project.id} }

    it "destroys the requested project" do
      expect { subject }.to change(Project, :count).by(-1)
    end
  end
  
end
