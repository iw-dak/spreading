class Post < ApplicationRecord
    validates_presence_of  :title, :content, :status, :slug, :views, :image

    belongs_to :user
    has_many :comments
    has_and_belongs_to_many :categories
end
