class Api::TagsController < Api::ApplicationController
  def index
    @tags = Tag.all
    render 'index', formats: :json, handlers: 'jbuilder'
  end

  def create
    tag = Tag.find_or_initialize_by(id: params[:tag_name])
    tag.update(tag_params)
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end

