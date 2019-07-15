class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  def index
    render json: Comment.all
  end

  #paginated comments
  def filtered
    render json: Comment.limit(params[:limit]).offset(params[:offset])
  end

  def approved
      render json: Comment.where("status = ? AND post_id = ?", true, params[:post])
  end

  def show
    render json: @comment
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
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.permit(:content, :status)
  end
end
