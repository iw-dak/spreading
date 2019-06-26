
#Users
def time_rand from = 0.0, to = Time.now
    Time.at(from + rand * (to.to_f - from.to_f))
end

random_date = time_rand Time.local(2010, 1, 1)

User.create(firstname: 'Adam', lastname: 'Sow', birthdate: random_date, address: "242 rue du faubourg", email: "adam@gmail.com", phone: "8908789", password: "admin", roles: "admin")
User.create(firstname: 'Nakib', lastname: 'Abudu', birthdate: random_date, address: "242 rue du faubourg", email: "nakib@gmail.com", phone: "8908789", password: "admin", roles: "admin")
User.create(firstname: 'Driss', lastname: 'Belaroussi', birthdate: random_date, address: "242 rue du faubourg", email: "driss@gmail.com", phone: "8908789", password: "admin", roles: "admin")
User.create(firstname: 'Kaba', lastname: 'Conde', birthdate: random_date, address: "242 rue du faubourg", email: "kaba@gmail.com", phone: "8908789", password: "admin", roles: "admin")

#Comments
