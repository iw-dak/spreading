require "faker"

User.create(
  firstname: "admin",
  lastname: "admin",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "admin@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "admin",
  roles: "admin",
)

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
    profile: Faker::LoremPixel.image("200x200", false, "people", 3),
  )
end

# Categories
categories = Category.create([
  [name: "Mis en avant"],
  [name: "Frameworks"],
  [name: "Languages"],
])

# Posts
100.times do
  title = Faker::Quotes::Shakespeare.king_richard_iii_quote
  date = Faker::Time.between(100.days.ago, Date.today, :all)
  post = Post.create(
    title: title,
    content: Faker::Lorem.paragraphs(rand(1..3)).join(''),
    status: true,
    views: rand(500),
    votes: rand(500),
    readtime: rand(20),
    image: Faker::LoremPixel.image("570x300"),
    user: User.find(Faker::Number.between(1, 20)),
    created_at: date,
    updated_at: date,
  )

  post.categories << categories.sample
end

# Comments
10.times do
  Comment.create(
    content: Faker::Lorem.paragraphs(1).join('\n'),
    post: Post.find(Faker::Number.between(1, 100)),
    status: true,
  )
end
