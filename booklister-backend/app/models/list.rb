class List < ApplicationRecord
    has_many :book_lists
    has_many :books, through: :book_lists

    validates :name, presence: :true

    def add_book(book)
        BookList.create(list_id: self.id, book_id: book.id)
    end
end
