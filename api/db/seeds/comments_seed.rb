# Comments
10.times do
  Comment.create(
    content: Faker::Lorem.paragraphs(1).join('\n'),
    post: Post.find(Faker::Number.between(1, 100)),
    status: true,
  )
end
