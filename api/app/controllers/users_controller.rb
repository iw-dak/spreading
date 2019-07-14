class UsersController < ApplicationController
  protect_from_forgery
  skip_before_action :authenticate_request, only: %i[login register]
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:index, :show, :update, :destroy]

  def index
    if params[:email]
      render json: User.where("email" => params[:email]).first
    else
      render json: User.all
    end
  end

  #paginated users
  def filtered
    render json: User.limit(params[:limit]).offset(params[:offset])
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_register_params)
    @user.roles = 'subscriber'

    if @user.save
      response = { status: true, message: "User created successfully" }
      render json: response, status: :created
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

  # POST /login
  def login
    authenticate params[:email], params[:password]
  end

  private

  def authenticate(email, password)
    command = AuthenticateUser.call(email, password)

    if command.success?
      render json: {
        access_token: command.result,
        message: "Login Successful",
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def user_register_params
    params.permit(
      :firstname,
      :lastname,
      :email,
      :password,
      :password_confirmation
    )
  end
end
