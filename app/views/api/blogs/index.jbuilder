json.blogs do
  json.array! @blogs.each do |blog|
    json.id(blog.id)
    json.title(blog.title)
    json.description(blog.description)
    json.content(blog.content)
    json.status(blog.status)
    json.updated_at(blog.updated_at)
    json.created_at(blog.created_at)
  end
end
