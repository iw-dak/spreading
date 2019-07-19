class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_post, only: [:show, :update, :destroy, :update_views]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  def index
    render json: Post.where("status" => true), status: :ok
  end

  #paginated posts
  def filtered
    render json: Post.limit(params[:limit]).offset(params[:offset]), status: :ok
  end

  def count
    render json: Post.count, status: :ok
  end

  def show
    render json: @post, status: :ok
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
      render json: @post, status: :ok
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
    head :no_content
  end

  def set_post
    @post = Post.friendly.find(params[:id])
  end

  def post_params
    params.permit(:title, :content, :status, :views, :readtime, :image, :user_id, :is_external, :external_link,  category_ids: [], tag_ids: [])
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

  #GET /posts/to_approve
  def to_approve
    render json: Post.where("status" => false).count, status: :ok
  end
end
