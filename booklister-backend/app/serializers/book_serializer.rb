class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :note
end
