class Blog < ApplicationRecord
  enum status: { editing: 0, open: 1, hide: 2 }
end
