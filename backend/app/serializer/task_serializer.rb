class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status
  belongs_to :project

  # def average_content_rating
  # 	object.reviews.average(:average_rating).to_i
  # end

  # def average_recommend_rating
  # 	object.reviews.average(:recommend_rating).to_i
  # end

end
