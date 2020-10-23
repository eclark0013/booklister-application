class Book < ApplicationRecord
    has_many :book_lists
    has_many :lists, through: :book_lists

    validates :title, presence: :true

    def add_to_list(list)
        BookList.create(book_id: self.id, list_id: list.id)
    end
end
