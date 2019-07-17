class TagsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_tag, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_request, only: [:create, :update, :destroy]

  # GET /tags
  # GET /tags.json
  def index
    render json: Tag.all, status: :ok
  end

  #paginated posts
  def filtered
    render json: Tag.limit(params[:limit]).offset(params[:offset]), status: :ok
  end

  def count
    render json: Tag.count, status: :ok
  end

  # GET /tags/1
  # GET /tags/1.json
  def show
    render json: @tag, status: :ok
  end

  # POST /tags
  # POST /tags.json
  def create
    @tag = Tag.new(tag_params)

    respond_to do |format|
      if @tag.save
        format.html { redirect_to @tag, notice: 'Tag was successfully created.', status: :created }
        format.json { render :show, status: :created, location: @tag }
      else
        format.html { render :new }
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tags/1
  # PATCH/PUT /tags/1.json
  def update
    respond_to do |format|
      if @tag.update(tag_params)
        format.html { redirect_to @tag, notice: 'Tag was successfully updated.', status: :ok }
        format.json { render :show, status: :ok, location: @tag }
      else
        format.html { render :edit }
        format.json { render json: @tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tags/1
  # DELETE /tags/1.json
  def destroy
    @tag.destroy
    respond_to do |format|
      format.html { redirect_to tags_url, notice: 'Tag was successfully destroyed.', status: :no_content }
      format.json { head :no_content}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tag
      @tag = Tag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tag_params
      params.require(:tag).permit(:name, :slug)
    end
end
