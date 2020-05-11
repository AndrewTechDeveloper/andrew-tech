class Blog < ApplicationRecord
  enum status: { editing: 1, publish: 2, hidden: 3 }

  scope :search, -> (params) {
    where(status: params[:status]).limit(5)
  }
end
