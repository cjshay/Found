# Found

Found is a full-stack web application inspired by Medium.  It uses a React-redux loop architecture for
the front-end and a ruby-on-rails back-end.  

## Features & Implementation

### User creation/auth
The PostgreSQL database has a users table that is authenticated using BCrypt. Bcrypt 
doesn't store user's password in the database. Instead, it stores a unique 
value called a "SALT" hashed alongside the hashed password (several times). 
This guards against rainbow tables and essentially all brute force password hacking.
Users sessions are created using a sessions controller that assigns a current user 
to the window for frontend access on log in.

### Stories
Stories are created and stored using one database table. React containers access 
selector functions that filter stories located in state and subsequently loops 
through and displays all at once with a stories index item component. The front end
communicates with the backend using ajax calls in modular util files, giving the website
a fast, slick feel that only pings the database when necessary. Story actions are called and 
a thunk mechanism triggers ajax calls, passing them the relavent information. After each ajax 
call, the changed information comes back and is passed into the reducer. When this new information
serves up a new state, the component knows to re-render (This is a brief description of the
redux cycle, a unidirection way to structure application and logic flow).

![story screenshot](https://github.com/cjshay/found/blob/master/docs/screenshots/story.jpg)
![profile screenshot](https://github.com/cjshay/found/blob/master/docs/screenshots/profile.jpg)


### Responses
Responses are the "comments" of found. Responses are made using the same table
as stories. Because of this, responses can be responded to infinitely. Responses
are able to create this behavior because the story table contains a :parent_id
value, which corresponds to the story that it is referencing. Responses are filtered 
out of story feeds through selector functions mentioned above.



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
