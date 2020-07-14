class BookList < ApplicationRecord
    belongs_to :book
    belongs_to :list
    belongs_to :user

    # validates :book_id, presence: :true
    # validates :list_id, presence: :true 
    # validates :user_id, presence: :true

    validates :book_id, :list_id, :user_id, presence: :true
end
