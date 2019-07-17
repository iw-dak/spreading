# Comments
200.times do
  Comment.create(
    content: Faker::Lorem.sentences(4).join(""),
    post: Post.find(Faker::Number.between(1, 100)),
    user: User.find(Faker::Number.between(1, 100)),
    status: [true,false].sample,
  )
end
