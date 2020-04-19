class Blog < ApplicationRecord
  enum status: { editing: 0, publish: 1, hidden: 2 }
end
