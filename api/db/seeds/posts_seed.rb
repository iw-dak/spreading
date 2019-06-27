# Posts
100.times do
  title = Faker::Quotes::Shakespeare.king_richard_iii_quote
  date = Faker::Time.between(100.days.ago, Date.today, :all)
  post = Post.create(
    title: title,
    content: Faker::Lorem.paragraphs(rand(1..3)).join(""),
    status: true,
    views: rand(500),
    votes: rand(500),
    readtime: rand(20),
    image: Faker::LoremPixel.image("570x400"),
    user: User.find(Faker::Number.between(1, 1)),
    created_at: date,
    updated_at: date,
  )

#   post.categories << Category.find(Faker::Number.between(1, 3))
#   post.tags << Tag.find(Faker::Number.between(1, 10))
end
