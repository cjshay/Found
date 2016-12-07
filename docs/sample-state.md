```js
{

  session: {
    currentUser: {
      id: 1,
      username: "edgey listener"
      description: "I listen and I'm edgey"
    }
    errors: {[]}
  },
  stories: {
    1: {
      id: 1,
      title: "Winter is coming",
      content: "or is it?",
      author: {
        username: "coolcat",
        description: "is a coolcat"
      },
      like_count: 35,
      comment_ids: []
    },
    2: {
      id: 2,
      title: "Some good games out there",
      content: "Some football",
      author: {
        username: "coolcat",
        description: "is a coolcat"
      },
      like_count: 8,
      comment_ids: []
    }
  },
  forms: {
    createStory: {errors: []}
    createComment: {errors: ["content can't be blank"]}
    search: {errors: []}
  },
  comments: {
    1: {
      content: "You should buy a coat",
      author: {
        username: "coolcat",
        description: "is a coolcat"
      },
      like_count: 35,
      story_id: 1
    },
    2: {
      content: "It's not even cold outside",
      author: {
        username: "coolcat",
        description: "is a coolcat"
      },
      like_count: 2,
      story_id: 1
    }
  }
}
```
