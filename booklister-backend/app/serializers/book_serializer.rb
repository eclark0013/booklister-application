class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :note, :image_url, :list_ids
end
