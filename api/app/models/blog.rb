class Blog < ApplicationRecord
  enum status: { editing: 1, publish: 2, hidden: 3 }

  scope :search, -> (params) {
    status = params[:status] === 'all' ? ['editing', 'publish', 'hidden'] : params[:status]
    where(status: status).limit(5)
  }
end
