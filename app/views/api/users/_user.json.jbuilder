follower_ids = user.followers.map{|follower| follower.id}
followee_ids = user.followees.map{|followee| followee.id}

json.extract! user, :username, :id
json.set! :follows do
  json.set! :follower_ids, follower_ids
  json.set! :follower_count, follower_ids.length
  json.set! :followee_ids, followee_ids
  json.set! :followee_count, followee_ids.length
end
