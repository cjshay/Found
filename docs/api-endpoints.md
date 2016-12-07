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

- `GET /api/stories/:story_id/comments`
- `POST /api/stories/:story_id/comments`
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`


### Follows

- A Users's follows will be included in the user show template
- `POST /api/follows`
- `DELETE /api/follows/:id`

### Likes

- A Users's follows will be included in the corresponding story/comment show template
- `POST /api/comments/comment_id/likes`
or
- `POST /api/stories/story_id/likes`

- `DELETE /api/stories/story_id/likes/`
or
- `DELETE /api/comments/:comment-id/likes`
