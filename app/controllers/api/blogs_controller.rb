class Api::BlogsController < Api::ApplicationController
  def index
    @blogs = Blog.where(status: "publish")
    render 'index', formats: :json, handlers: 'jbuilder'
  end

  def show
    @blog = Blog.find(params[:id])
    render 'show', formats: :json, handlers: 'jbuilder'
  end

  def create
    blog = Blog.find_or_initialize_by(id: params[:id])
    blog.update(blog_params)
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :og_image, :description, :content, :status)
  end

  def blog_tag_params
    params.require(:blog_tag).permit(:blog_id, :tag_id)
  end
end

