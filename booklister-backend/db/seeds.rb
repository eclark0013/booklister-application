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

b1 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", note: "Children's book?", image_url: "https://ahmadataka.files.wordpress.com/2013/01/the-hobbit.jpg")
b2 = Book.create(title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky", note: "Lots of Russian names", image_url: "https://kbimages1-a.akamaihd.net/5320c855-dac9-45f2-bf35-9e470d1fb2fe/1200/1200/False/the-brothers-karamazov-22.jpg")
b3 = Book.create(title: "The City of God", author: "Saint Augustine", note: "What is the city of God?", image_url: "https://images-na.ssl-images-amazon.com/images/I/71hPTXdBhNL.jpg")
b4 = Book.create(title: "Guide to Childbirth", author: "Ina May Gaskin", note: "Interesting", image_url: "https://images-na.ssl-images-amazon.com/images/I/71a2NJHZ13L.jpg")

l1 = List.create(name: "All Books")
l2 = List.create(name: "Current library")
l3 = List.create(name: "Books to read soon")
l4 = List.create(name: "My wife's books")

bl1 = BookList.create(book_id: b1.id, list_id: l2.id)
bl2 = BookList.create(book_id: b2.id, list_id: l2.id)
bl3 = BookList.create(book_id: b3.id, list_id: l2.id)
bl4 = BookList.create(book_id: b2.id, list_id: l3.id)
bl5 = BookList.create(book_id: b3.id, list_id: l3.id)
bl6 = BookList.create(book_id: b4.id, list_id: l4.id)
bl7 = BookList.create(book_id: b1.id, list_id: l1.id)
bl8 = BookList.create(book_id: b2.id, list_id: l1.id)
bl9 = BookList.create(book_id: b3.id, list_id: l1.id)
bl10 = BookList.create(book_id: b4.id, list_id: l1.id)