class Blog < ApplicationRecord
  enum status: { editing: 1, publish: 2, hidden: 3 }
end
