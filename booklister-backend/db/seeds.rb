# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'

DatabaseCleaner.strategy = :truncation
DatabaseCleaner.clean

u1 = User.create(username: "eric", password: "clark")
u2 = User.create(username: "tori", password: "clark")

b1 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", note: "Children's book?", image_url: "data:image/jpeg;base64,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")
b2 = Book.create(title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky", note: "Lots of Russian names")
b3 = Book.create(title: "The City of God", author: "Saint Augustine", note: "Is Rome the city of God?")
b4 = Book.create(title: "Guide to Childbirth", author: "Ina May Gaskin", note: "Interesting")

l1 = List.create(name: "All Books for #{u1.username}")
l2 = List.create(name: "Current library")
l3 = List.create(name: "Books to read soon")
l4 = List.create(name: "My wife's books")

bl1 = BookList.create(book_id: b1.id, list_id: l2.id, user_id: u1.id)
bl2 = BookList.create(book_id: b2.id, list_id: l2.id, user_id: u1.id)
bl3 = BookList.create(book_id: b3.id, list_id: l2.id, user_id: u1.id)
bl4 = BookList.create(book_id: b2.id, list_id: l3.id, user_id: u1.id)
bl5 = BookList.create(book_id: b3.id, list_id: l3.id, user_id: u1.id)
bl6 = BookList.create(book_id: b4.id, list_id: l4.id, user_id: u2.id)

bl7 = BookList.create(book_id: b1.id, list_id: l1.id, user_id: u1.id)
bl8 = BookList.create(book_id: b2.id, list_id: l1.id, user_id: u1.id)
bl9 = BookList.create(book_id: b3.id, list_id: l1.id, user_id: u1.id)
bl10 = BookList.create(book_id: b4.id, list_id: l1.id, user_id: u1.id)