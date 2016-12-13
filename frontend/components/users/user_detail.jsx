import React from 'react';
import { StoryIndexItem } from '../stories/story_index_item';
import StoryIndexContainer from '../stories/stories_index_container';

const UserDetailIndexItems = ({ stories, currentUser, deleteLike, createLike }) => {

  return (
    <ul className="">
      { stories.reverse().map(
        story => <StoryIndexItem
        key={ story.id }
        story={ story }
        currentUser= { currentUser }
        deleteLike={ deleteLike }
        createLike={ createLike }/>
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
        <UserDetailIndexItems
          stories={this.props.stories}
          currentUser= { this.props.currentUser }
          deleteLike={ this.props.deleteLike }
          createLike={ this.props.createLike }/>
      </main>
    );
  }

}

export default UserDetail;
