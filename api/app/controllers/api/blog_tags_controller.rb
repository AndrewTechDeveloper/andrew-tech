class Api::BlogTagsController < Api::ApplicationController
  def index
    @blog_tags = BlogTag.all
    render 'index', formats: :json, handlers: 'jbuilder'
  end

  def create
    BlogTag.create(blog_tag_params)
  end

  private
  def blog_tag_params
    params.require(:blog_tag).permit(:blog_id, :tag_id)
  end
end

