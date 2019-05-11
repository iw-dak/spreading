# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ firstname: 'Star Wars' }, { firstname: 'Lord of the Rings' }])
#   Character.create(firstname: 'Luke', movie: movies.first)

#Users
#FIXME: seed doesn't generates error but doesn't create entries, use rails sonsole for tests
User.create(firstname: 'Adam', lastname: 'Sow', birthdate: "2019-07-11 18:58:32", address: "242 rue du faubourg", email: "asow@gmail.com", phone: "8908789", password: "spread", roles: "admin")

#Comments
