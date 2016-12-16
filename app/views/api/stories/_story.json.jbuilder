length = (story.content.split.length / 60) + 1
likers = story.likers.map{ |liker| liker.username }
response_ids = story.responses.map{ |response| response.id}

json.extract! story, :id, :title, :content, :parent_id, :image_url
json.set! :author do
  json.partial! 'api/users/user', user: story.author
  # json.set! :username, story.author.username
  # json.set! :id, story.author.id
end
json.set! :length, length
json.set! :date do
  json.set! :day, story.created_at.day
  json.set! :month, story.created_at.month
end
json.set! :likes, story.likes.length
json.set! :likers, likers
json.set! :response_ids, response_ids


# TODO: Change state shape so that there is just an author id
