class PostHasCategory < ApplicationRecord
    validates_presence_of :posts, :categories
end

#TODO: Check models for intermediate tables and update controller too
