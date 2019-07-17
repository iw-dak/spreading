class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_post, only: [:show, :update, :destroy, :update_views]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  def index
    render json: Post.where("status" => true)
  end

  #paginated posts
  def filtered
    render json: Post.limit(params[:limit]).offset(params[:offset])
  end

  def count
    render json: Post.count
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

  def update_views
    if @post.update(update_views_params)
      render json: @post, status: :ok
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

  def update_views_params
    params.permit(:id, :views)
  end

  def latests
    render json: Post.where("status" => true).order("created_at desc").limit(4), status: :ok
  end

  def get_latest_by_category
    render json: Post.joins(:categories).where("categories.slug" => params[:category], "status" => true).order("created_at desc").limit(2), status: :ok
  end

  def populars
    render json: Post.where("status" => true).order("views desc").limit(4), status: :ok
  end
end
