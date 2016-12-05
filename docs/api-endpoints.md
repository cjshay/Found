# API Endpoints

## HTML API

### Root

- `GET /` - loads web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `GET /api/stories`
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- `GET /api/stories/:story-id/comments`
- `POST /api/stories/:story-id/comments`
- `GET /api/stories/:story-id/comments/:id`
- `DELETE /api/stories/:story-id/comments/:id`


### Follows

- A Users's follows will be included in the user show template
- `POST /api/users/:user-id/follows`
- `DELETE /api/users/:user-id/follows/:id`

### Likes

- A Users's follows will be included in the corresponding story/comment show template
- `POST /api/stories/story:id/likes`
or
- `POST /api/stories/story:id/comments/:comment-id/likes`

- `DELETE /api/stories/story:id/likes/:id`
or
- `DELETE /api/stories/story:id/comments/:comment-id/likes/:id`
