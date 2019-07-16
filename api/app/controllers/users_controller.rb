class UsersController < ApplicationController
  protect_from_forgery
  skip_before_action :authenticate_request, only: %i[login register]
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:index, :show, :update, :destroy]

  def index
    if params[:email]
      render json: User.where("email" => params[:email]).first
    else
      render json: User.all, status: :ok
    end
  end

  #paginated users
  def filtered
    render json: User.limit(params[:limit]).offset(params[:offset]), status: :ok
  end

  def count
    render json: User.count, status: :ok
  end

  def show
    render json: @user, status: :ok
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
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    head :no_content
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
        status: :ok
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
