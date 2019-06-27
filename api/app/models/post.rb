class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :sequentially_slugged
  validates_presence_of :title, :content, :status, :slug, :views, :image

  belongs_to :user
  has_many :comments
  has_and_belongs_to_many :categories

  def slug_candidates
    [
        :title
    ]
  end
end
