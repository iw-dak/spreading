# Comments
200.times do
  Comment.create(
    content: Faker::Lorem.sentences(4),
    post: Post.find(Faker::Number.between(1, 100)),
    user: User.find(Faker::Number.between(1, 100)),
    status: true,
  )
end
