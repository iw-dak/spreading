class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end

  #paginated users
  def filtered
    render json: User.limit(params[:limit]).offset(params[:offset])
  end

  def show
    render json: @user
  end

  def create
    @user = user.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  def set_user
    @user = User.find(params[:id])
  end
  #TODO: check if password must figures here
  def user_params
    params.permit(:firstname, :lastname, :birthdate, :address, :email, :phone, :password, :roles)
  end
end
