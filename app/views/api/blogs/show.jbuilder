json.blog do
  json.id(@blog.id)
  json.title(@blog.title)
  json.image(@blog.image)
  json.description(@blog.description)
  json.content(@blog.content)
  json.updated_at(@blog.updated_at)
  json.created_at(@blog.created_at)
end
