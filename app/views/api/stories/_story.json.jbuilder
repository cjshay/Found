length = (story.content.split.length / 60) + 1
likers = story.likers.map{ |liker| liker.username }

json.extract! story, :id, :title, :content, :parent_id
json.set! :author do
  json.set! :username, story.author.username
end
json.set! :length, length
json.set! :date do
  json.set! :day, story.created_at.day
  json.set! :month, story.created_at.month
end
json.set! :likes, story.likes.length
json.set! :likers, likers
