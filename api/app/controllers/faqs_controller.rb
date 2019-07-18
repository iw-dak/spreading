class FaqsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_faq, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_request, only: [:created, :update, :destroy]

  # GET /faqs
  # GET /faqs.json
  def index
      render json: Faq.all, status: :ok
  end

  # GET /faqs/1
  # GET /faqs/1.json
  def show
      render json: @faq, status: :ok
  end


  # POST /faqs
  # POST /faqs.json
  def create
    @faq = Faq.new(faq_params)
      if @faq.save
         render :show, status: :created, location: @faq
      else
        render json: @faq.errors, status: :unprocessable_entity

    end
  end

  # PATCH/PUT /faqs/1
  # PATCH/PUT /faqs/1.json
  def update

      if @faq.update(faq_params)
         render :show, status: :ok, location: @faq
      else
        render json: @faq.errors, status: :unprocessable_entity
    end
  end

  # DELETE /faqs/1
  # DELETE /faqs/1.json
  def destroy
    @faq.destroy
     head :no_content

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_faq
      @faq = Faq.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def faq_params
      params.require(:faq).permit(:question, :answer)
    end
end
