class Task < ApplicationRecord
	belongs_to :project
	validates :name, presence: true
	enum status: [:open, :in_progress, :finished]
end
