class Faq < ApplicationRecord
    validates_presence_of :question, :answer
end
