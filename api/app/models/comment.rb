class Comment < ApplicationRecord
    validates_presence_of :content, :status

    belongs_to :post
    belongs_to :user
end
