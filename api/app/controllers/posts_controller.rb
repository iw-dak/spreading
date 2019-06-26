class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

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
    @post = Post.friendly.find(params[:id])
  end

  def post_params
    params.permit(:title, :content, :status, :slug, :views, :image)
  end

  def latests
    render json: Post.order("created_at desc").limit(4), status: :ok
  end

  def get_by_category
    render json: Post.joins(:categories).where("categories.slug" => params[:category]).order("created_at desc").limit(2), status: :ok
  end

  def populars
    render json: Post.order("views desc").limit(4)
  end
end
