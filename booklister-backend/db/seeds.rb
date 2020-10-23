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

# b7 = Book.create(title: TITLE, author: AUTHOR, note: NOTE, image_url: IMAGE)
b1 = Book.create(title: "The Hobbit", author: "J.R.R. Tolkien", note: "Children's book?", image_url: "https://ahmadataka.files.wordpress.com/2013/01/the-hobbit.jpg")
b2 = Book.create(title: "The Brothers Karamazov", author: "Fyodor Dostoyevsky", note: "Lots of Russian names", image_url: "https://kbimages1-a.akamaihd.net/5320c855-dac9-45f2-bf35-9e470d1fb2fe/1200/1200/False/the-brothers-karamazov-22.jpg")
b3 = Book.create(title: "The City of God", author: "Saint Augustine", note: "What is the city of God?", image_url: "https://images-na.ssl-images-amazon.com/images/I/71hPTXdBhNL.jpg")
b4 = Book.create(title: "Guide to Childbirth", author: "Ina May Gaskin", note: "Interesting", image_url: "https://images-na.ssl-images-amazon.com/images/I/71a2NJHZ13L.jpg")
b5 = Book.create(title: "Peter Pan and Wendy", author: "JM Barrie", note: "age 6", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYtYphToc55mLBqXDZFGK0pm4fnsvtvd2a-Q&usqp=CAU")
b6 = Book.create(title: "The Wind in the Willows", author: "Kenneth Graham", note: "age 8", image_url: "https://www.abebooks.com/images/Community/Featured/wind-willows/wind-in-the-willows-anniversary.jpg")
b7 = Book.create(title: "James and the Giant Peach", author: "Roald Dahl", note: "A little strange", image_url: "https://images1.penguinrandomhouse.com/cover/9780451480798")
b8 = Book.create(title: "The Lion, the Witch and the Wardrobe", author: "CS Lewis", note: "heavy allegory", image_url: "https://images-na.ssl-images-amazon.com/images/I/516lPV5TmxL.jpg")

l1 = List.create(name: "All Books")
l2 = List.create(name: "Current library")
l3 = List.create(name: "Books to read soon")
l4 = List.create(name: "My wife's books")
l5 = List.create(name: "Books to read to my son")

[l1, l2, l5]. each do |list|
    b5.add_to_list(list)
end

[l1, l2, l3, l5]. each do |list|
    b6.add_to_list(list)
end

[l1, l2, l5]. each do |list|
    b7.add_to_list(list)
end

[l1, l4, l5]. each do |list|
    b8.add_to_list(list)
end

[l1, l2]. each do |list|
    b1.add_to_list(list)
end

[l1, l2, l3]. each do |list|
    b2.add_to_list(list)
end

[l1, l2, l3]. each do |list|
    b3.add_to_list(list)
end

[l1, l4]. each do |list|
    b4.add_to_list(list)
end


