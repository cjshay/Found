json.extract! story, :id, :title, :content
json.set! :author do
  json.set! :username, story.author.username
end
