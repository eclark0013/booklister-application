class BookList < ApplicationRecord
    belongs_to :book
    belongs_to :list
    belongs_to :user
end
