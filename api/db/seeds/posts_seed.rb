# Posts
100.times do
  title = Faker::Quotes::Shakespeare.king_richard_iii_quote
  date = Faker::Time.between(100.days.ago, Date.today, :all)
  post = Post.create(
    title: title,
    content: Faker::Lorem.paragraphs(rand(1..100)).join(""),
    status: true,
    views: rand(1000),
    votes: rand(1000),
    readtime: rand(20),
    image: Faker::LoremPixel.image("570x400"),
    user: User.find(Faker::Number.between(1, 20)),
    created_at: date,
    updated_at: date,
  )

  post.categories << Category.find(Faker::Number.between(1, 3))
  post.tags << Tag.find(Faker::Number.between(1, 10))
end
