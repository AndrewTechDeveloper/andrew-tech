class Api::BlogsController < Api::ApplicationController
  def index
    @blogs = Blog.all
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def create
    blog = Blog.create(blog_params)
  end

  def update
    blog = Blog.find(params[:id])
    blog.update(blog_params)
  end

  private
  def chat_talk_params
    params.require(:blog).permit(:title, :description, :, :edited)
  end
end

