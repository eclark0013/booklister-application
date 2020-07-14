class User < ApplicationRecord
    has_secure_password
    has_many :book_lists
    has_many :lists, through: :book_lists
    has_many :books, through: :book_lists
end
