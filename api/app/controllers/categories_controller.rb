class CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_category, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  def index
    render json: Category.all, status: :ok
  end

  def show
    render json: @category, status: :ok
  end

  def create
    @category = category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def update
    if @category.update(category_params)
      render json: @category, status: :ok
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy
    head :no_content
  end

  def set_category
    @category = Category.friendly.find(params[:id])
  end

  def category_params
    params.permit(:name)
  end
end
