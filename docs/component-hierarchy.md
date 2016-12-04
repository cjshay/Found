## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**StoriesContainer**
 - StoriesHeader
  * StoryIndex

**CommentContainer**
 - CommentHeader

**SearchResultsContainer**
 - Search
 - StoryIndex

**StoryIndex**
 - StoryIndexItem
  + StoryDetail
    + StoryTools
    - StorySearch
    * Story

**NewStoryContainer**
 - NewStory
  - RTETools
  - NewStoryButton

**Search**

**NewStory**
 - NewStory

**StorySearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/story/:storyId" | "StoriesContainer" |
| "/home/story/:commentId/comment/:commentId" | "CommentContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-story" | "NewStoryContainer" |
| "/search" | "Search" |
| "/new-story" | "NewStory" |
| "/new-comment" | "NewComment" |
| "/story-search" | "StorySearch" |
