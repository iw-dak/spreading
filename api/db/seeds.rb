require "faker"

# Users
20.times do
  User.create(
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
    address: Faker::Address.full_address,
    email: Faker::Internet.free_email,
    phone: Faker::PhoneNumber.cell_phone_with_country_code,
    password: "admin",
    roles: "admin",
  )
end

# Posts
100.times do
  title = Faker::Lorem.sentence(rand(2..10)).chomp(".")
  Post.create(
    title: title,
    content: Faker::Lorem.paragraphs(rand(1..3)).join('\n'),
    status: true,
    slug: title.parameterize,
    views: rand(500),
    image: Faker::LoremFlickr.image,
    user: User.find(Faker::Number.between(1, 20)),
  )
end

# Comments
10.times do
  Comment.create(
    content: Faker::Lorem.paragraphs(1).join('\n'),
    post: Post.find(Faker::Number.between(1, 100)),
    status: true
  )
end
