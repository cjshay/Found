```js
{
  currentUser: {
    id: 1,
    username: "edgey listener"
    description: "I listen and I'm edgey"
    // story_ids: []
    // follower_ids: []
    // followee_ids: []
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    createStory: {errors: []}
    createComment: {errors: ["content can't be blank"]}
    search: {errors: []}
  },
  stories: {
    1: {
      title: "Winter is coming",
      content: "or is it?",
      author_id: 1,
      like_count: 35
      comment_ids: []
    }
  },
  comments: {
    1: {
      author_id: 1,
      content: "You should buy a coat",
      like_count: 35
    }
  }
}
```
