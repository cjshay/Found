import React from 'react';
import { StoryIndexItem } from '../stories/story_index_item';
import StoryIndexContainer from '../stories/stories_index_container';

const UserDetailIndexItems = ({ stories }) => {

  return (
    <ul className="">
      { stories.reverse().map(
        story => <StoryIndexItem key={ story.id } story={ story }/>
      )}
    </ul>
  );
};

export const UserDetail = ({user, stories}) => {
  debugger
  return (
    <main>
      <section>
        <ul>
          <li>user.username</li>
          <li>user.description</li>
          <li>{user.follows.follower_count} Followers</li>
          <li>{user.follows.followee_count} Following </li>
        </ul>
      </section>
      <UserDetailIndexItems stories={stories}/>
    </main>
  );
};

export default UserDetail;
