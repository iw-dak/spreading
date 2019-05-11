# class PostsHasCategoriesController < ApplicationController
#   def index
#     render json: PostHasCategory.all
#   end

#   def show
#     render json: @post_has_category
#   end

#   def create
#     @post_has_category = PostHasCategory.new(post_has_category_params)
#     end
#   end

#   def update
#   end

#   def destroy
#     @post_has_category.destroy
#   end

#   def set_post_has_category
#     @post_has_category = PostHasCategory.find(params[:id])
#   end

#   def post_has_category_params
#     params.permit(:posts, :categories)
#   end
# end
