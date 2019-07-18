class CategorySerializer < ActiveModel::Serializer
    attributes :id, :name, :slug, :created_at, :updated_at, :posts

    def posts
        self.object.posts.map do |post|
            {id: post.id,
             title: post.title,
             slug: post.slug,
             content: post.content,
             status: post.status,
             views: post.views,
             votes: post.votes,
             readtime: post.readtime,
             image: post.image,
             created_at: post.created_at,
             user: post.user}
        end
    end
end
