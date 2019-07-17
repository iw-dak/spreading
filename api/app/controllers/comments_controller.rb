class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  def index
    render json: Comment.all, status: :ok
  end

  #paginated comments
  def filtered
    render json: Comment.limit(params[:limit]).offset(params[:offset]), status: :ok
  end

  def count
    render json: Comment.count, status: :ok
  end

  #GET /comments/to_approve
  def to_approve
    render json: Comment.where("status" => false).count, status: :ok
  end

  def show
    render json: @comment, status: :ok
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    head :no_content
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.permit(:content, :status)
  end

  def latests
    render json: Comment.where("status" => true).order("created_at desc").limit(4), status: :ok
  end
end
