# Users
User.create(
  firstname: "Kaba",
  lastname: "CONDE",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "admin@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "adminadmin",
  password_confirmation: "adminadmin",
  roles: "admin",
  profile: Faker::LoremPixel.image("200x200", false, "people", 3),
)

100.times do
  User.create(
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
    address: Faker::Address.full_address,
    email: Faker::Internet.free_email,
    phone: Faker::PhoneNumber.cell_phone_with_country_code,
    password: "adminadmin",
    roles: "admin",
    profile: Faker::LoremPixel.image("200x200", false, "people", 3),
  )
end
