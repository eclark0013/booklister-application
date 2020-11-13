class BookList < ApplicationRecord
    belongs_to :book
    belongs_to :list

    validates :book_id, :list_id, presence: :true
end
