```js
{
  currentUser: {
    id: 1,
    username: "edgey listener"
    description: "I listen and I'm edgey"
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
    },
    2: {
      title: "Some good games out there",
      content: "Some football",
      author_id: 1,
      like_count: 8
      comment_ids: []
    }
  },
  comments: {
    1: {
      author_id: 2,
      content: "You should buy a coat",
      like_count: 35,
      story_id: 1
    },
    2: {
      author_id: 3,
      content: "It's not even cold outside",
      like_count: 2,
      story_id: 1
    }
  }
}
```
