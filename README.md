# Found

[Found](https://found-medium.herokuapp.com/#/)

Found is a full-stack web application inspired by Medium.  It uses a React-redux loop architecture for
the front-end and a ruby-on-rails back-end.  

## Features & Implementation

### User creation/auth
Users can sign up for found in order to discover meaningful articles and
make useful discourse about their passions. On the back-end, users are created
with a username, where an api namespace creates a session for them automatically
(logs them in). The auth is created using the bcrypt gem to create a hashed password_digest
and a hashed session token to keep track of the logged in user.

### Stories
Stories are the main feature of Found. Each user can read other users' stories.
Users can update and delete stories that they've posted. Stories use
large pristine photos to demonstrate their content. On the back end,
the database stores the content, image and author id of the post under an
api namespace. On the front end, react updates stories on the spot using a
router. Story index pages are fetched using ajax functions that make calls to
the api/stories namespace. Story show pages are fetched similarly passing
the story id as a param. If a story is edited or updated, the page automatically
updates because the props are listening to that slice of state.

![story screenshot](https://github.com/cjshay/found/blob/master/docs/screenshots/story.jpg)
![profile screenshot](https://github.com/cjshay/found/blob/master/docs/screenshots/profile.jpg)


### Responses
Responses are the "comments" of found. Responses are made using the same table
as stories. Because of this, responses can be responded to infinitely. Responses
are able to create this behavior because the story table contains a :parent_id
value, which corresponds to the story that it is referencing.



### Follows
Users can follow other users using a join table containing followee_id and
follower_id. Active record associations allow for this table to be used to
create different selector feeds. The main feed is made by selecting all the
stories that a user's followers have made (an array of follower ids is stored
in the user object.)

### Likes
Users can like and unlike stories. Because stories and responses are the same table,
this is fairly easy to implement. The backend creates likes between a story_id
and a liker_id, referencing the users table. Active record query uses this to
dynamically generate the amount of likes each post has.

## Future Directions for the Project
I want to continue the project, because the app has been really enjoyable to make,
and there's a lot more to do.

### Optimize selectors and refactor
The code in this app, because responses and stories are the same table, could be
minimalized a ton. Almost every feature reuses other features and I think hundreds
of lines of code can be easily cut down.

Also, because of the associations, many selectors could easily be made to guide users
to editor's favorites, favorites based on topic, or stories that the user has liked.


### Search
The search function of medium is very useful, and is a great way to find new stories/
users. I would auto update the results as the user typed into the search field.

### Infinite Scroll
Infinite scroll would be great to learn for when apps get a particularly large
amount of stories/posts
