require 'rails_helper'

RSpec.describe Project, type: :model do
	
  it "creates a project" do
    @project = FactoryGirl.create(:project)
    expect(@project).to be_valid
  end

  it "does not create a project without name" do
    expect(Project.create(description: "Test 12")).to be_invalid
  end
end
