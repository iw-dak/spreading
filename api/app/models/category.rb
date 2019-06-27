class Category < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :sequentially_slugged

  validates_presence_of :name, :slug
  has_and_belongs_to_many :posts
end
