class Book < ApplicationRecord
    has_many :book_lists
    has_many :lists, through: :book_lists

    validates :title, presence: :true
end