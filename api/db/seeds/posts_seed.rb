# Posts
100.times do
  title = Faker::Quotes::Shakespeare.king_richard_iii_quote
  date = Faker::Time.between(100.days.ago, Date.today, :all)
  post = Post.create(
    title: title,
    content: Faker::Lorem.paragraphs(rand(1..100)).join(""),
    status: [true, false].sample,
    views: rand(1000),
    readtime: rand(20),
    image: Faker::LoremPixel.image("570x400"),
    user: User.find(Faker::Number.between(1, 20)),
    is_external: [true, false].sample,
    external_link: ["https://medium.com/flutter-community/flutter-bloc-and-provider-a-shopping-cart-example-af75004e1666", "https://medium.com/flutter-community/flutter-redux-toast-notification-fcd0971eaf0f"].sample,
    created_at: date,
    updated_at: date,
  )

  post.categories << Category.find(Faker::Number.between(1, 3))
  post.tags << Tag.find(Faker::Number.between(1, 10))
end
