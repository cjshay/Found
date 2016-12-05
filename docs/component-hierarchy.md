## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - StoriesContainer
 - Sidebar (story suggestions)

**StoriesContainer**
  * StoryIndex(for any one User)


**CommentsContainer**
 - CommentIndexItem

**SearchResultsContainer**
 - StorySearch
 - StoryIndex (all stories)

**StoryIndex**
 - StoryIndexItem
  + StoryDetail
    * Story

**NewStoryContainer**
 - NewStory

 **NewComment**
 - New Comment

**StorySearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/stories" | "StoriesContainer" |
| "/users/:user-id/stories" | "UserStoriesContainer" |
| "/stories/:story-id" | "StoryIndexItem" |
| "/stories/:story-id/comments/" | "CommentsContainer" |
| "/stories/:story-id/comments/:comment-id" | "Comment" |
| "/new-story" | "NewStoryContainer" |
| "/new-comment" | "NewComment" |
| "/story-search" | "StorySearch" |
