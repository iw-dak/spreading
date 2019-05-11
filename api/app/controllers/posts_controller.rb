class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.permit(:title, :content, :status, :slug, :views, :image)
  end
end
