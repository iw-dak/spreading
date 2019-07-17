class VotesController < ApplicationController
  protect_from_forgery
  before_action :set_vote, only: [:show, :update, :destroy]
  before_action :authenticate_request, only: [:index, :create, :update, :destroy]

  def index
    render json: Vote.all
  end

  def show
    render json: @vote
  end

  def create
    @vote = Vote.new(vote_params)

    if !Vote.exists?(user_id: vote_params["user_id"], post_id: vote_params["post_id"])
      if @vote.save
        render json: @vote, status: :created, location: @vote
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    else
        render json: {message: "Vous avez déjà aimé cet article"}, status: :forbidden
    end
  end

  def status
    render json: Vote.exists?(user_id: vote_params["user_id"], post_id: vote_params["post_id"]), status: :ok
  end

  def update
    if @vote.update(vote_params)
      render json: @vote, status: :ok
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @vote.destroy
    render head: :no_content
  end

  def set_vote
    @vote = Vote.find(params[:id])
  end

  def vote_params
    params.permit(:post_id, :user_id)
  end
end
