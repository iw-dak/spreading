# Comments
10.times do
    Faq.create(
        question: Faker::Lorem.paragraphs(1).join('\n'),
        answer: Faker::Lorem.paragraphs(1).join('\n')
        )
end
