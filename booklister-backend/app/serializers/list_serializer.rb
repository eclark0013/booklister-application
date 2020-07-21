class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :note, :books

  def books
    ActiveModel::SerializableResource.new(object.books,  each_serializer: BookSerializer)
  end
end
