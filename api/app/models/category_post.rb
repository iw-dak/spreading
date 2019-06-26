class CategoryPost < ApplicationRecord
    validates_presence_of :posts, :categories
end
