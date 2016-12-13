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
  constructor(props) {
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
  }
  componentDidMount() {
    this.props.fetchUserStories();
    this.props.fetchUser(this.props.userId);
  }

  toggleFollow() {
    if (this.props.currentUser !== null) {
      if (this.props.user.follows.follower_ids.includes(this.props.currentUser.id)) {
        this.props.deleteFollow(this.props.user.id);
        return this.toggleFollow;
      } else {
        this.props.createFollow(this.props.user.id);
        return this.toggleFollow;
      }
    }
  }

  followButton() {
    if (this.props.currentUser === null) {
      return (<div></div>);
    }
    const following =
    this.props.user.follows.follower_ids
    .includes(this.props.currentUser.id);

    if (following) {
      return (<button onClick={this.toggleFollow}>Unfollow</button>);
    }
    return (<button onClick={this.toggleFollow}>Follow</button>);
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
            <li>
              <ul>
                <li>{this.props.user.follows.follower_count} Followers</li>
                <li>{this.props.user.follows.followee_count} Following </li>
              </ul>
            </li>
            <li>{this.followButton()}</li>
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
