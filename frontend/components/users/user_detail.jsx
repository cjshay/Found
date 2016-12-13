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
class UserDetail extends React.Component {
  componentDidMount() {
    this.props.fetchUserStories();
    this.props.fetchUser(this.props.userId);
  }

  render () {
    if (this.props.user === undefined) {
      return (<div></div>);
    }
    debugger

    return (
      <main>
        <section>
          <ul>
            <li>{this.props.user.username}</li>
            <li>{this.props.user.description}</li>
            <li>{this.props.user.follows.follower_count} Followers</li>
            <li>{this.props.user.follows.followee_count} Following </li>
          </ul>
        </section>
        <UserDetailIndexItems stories={this.props.stories}/>
      </main>
    );
  }

}

export default UserDetail;
