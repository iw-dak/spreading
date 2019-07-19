class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :sequentially_slugged
  validates_presence_of :title, :status, :views, :slug, :image

  belongs_to :user
  has_many :comments, dependent: :delete_all
  has_many :votes, dependent: :delete_all

  has_and_belongs_to_many :categories
  has_and_belongs_to_many :tags

  def slug_candidates
    [
      :title,
    ]
  end
end
