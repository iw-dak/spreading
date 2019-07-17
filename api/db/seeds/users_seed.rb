# Admins
User.create(
  firstname: "Kaba",
  lastname: "Conde",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "kaba@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "KC",
  password_confirmation: "adminadmin",
  roles: "admin",
  profile: Faker::LoremPixel.image("200x200", false, "people", 3),
)
User.create(
  firstname: "Adam",
  lastname: "Sow",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "adam@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "AMS",
  password_confirmation: "adminadmin",
  roles: "admin",
  profile: Faker::LoremPixel.image("200x200", false, "people", 3),
)
User.create(
  firstname: "Nakib",
  lastname: "Abudu",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "nakib@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "NA",
  password_confirmation: "adminadmin",
  roles: "admin",
  profile: Faker::LoremPixel.image("200x200", false, "people", 3),
)
User.create(
  firstname: "Driss",
  lastname: "Belaroussi",
  birthdate: Faker::Time.between(25.years.ago, 18.years.ago, :all),
  address: Faker::Address.full_address,
  email: "driss@admin.com",
  phone: Faker::PhoneNumber.cell_phone_with_country_code,
  password: "DB",
  password_confirmation: "adminadmin",
  roles: "admin",
  profile: Faker::LoremPixel.image("1600x600", false, "people", 3),
)

# Random users
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
    profile: Faker::LoremPixel.image("1600x600", false, "people", 3),
  )
end
