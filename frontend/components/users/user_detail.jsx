import React from 'react';
import { StoryIndexItem } from '../stories/story_index_item';
import StoryIndexContainer from '../stories/stories_index_container';
import EditUser from './edit_user';

const UserDetailIndexItems = ({ stories, currentUser, deleteLike, createLike, deleteStory }) => {

  return (
    <ul className="">
      { stories.reverse().map(
        story => <StoryIndexItem
        key={ story.id }
        story={ story }
        deleteStory= {deleteStory}
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
    this.state = {edit: false};
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
    this.userIsEditing = this.userIsEditing.bind(this);
    this.toggleEditUser = this.toggleEditUser.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user === undefined || nextProps.user === undefined || this.props.user.username !== nextProps.user.username) {
      this.setState({edit: false});
    }
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
    if (this.props.currentUser === null || this.props.currentUser.id === this.props.user.id) {
      return (<div></div>);
    }
    const following =
    this.props.user.follows.follower_ids
    .includes(this.props.currentUser.id);

    if (following) {
      return (<button className="following" onClick={this.toggleFollow}>Following</button>);
    }
    return (<button className="follow" onClick={this.toggleFollow}>Follow</button>);
  }
  userIsEditing() {
    this.setState({edit: true});
  }

  toggleEditUser(userIsEditing) {
    debugger
    if (this.state.edit) {
      return (<EditUser
        user={this.props.user}
        updateUser={this.props.updateUser}/>);
    }
    return (
      <section className="user-detail-info">
        <ul className="group">
          <li><img className="user-detail-image" src={ this.props.user.image_url }/></li>
          <li className="user-detail-info-content">
            <ul>
              <li id="user-detail-username">{this.props.username}</li>
              <li id="user-detail-description">{this.props.user.description}</li>
              <li>
                <ul className="user-detail-follows group">
                  <li>{this.props.user.follows.follower_count} Followers</li>
                  <li>{this.props.user.follows.followee_count} Following </li>
                </ul>
              </li>
              <li>{this.followButton()}</li>
              <li>{<button onClick={this.userIsEditing}>Edit Profile</button>}</li>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
  render () {
    if (this.props.user === undefined) {
      return (<div></div>);
    }

    return (
      <main>
        {this.toggleEditUser()}
        <UserDetailIndexItems
          stories={this.props.stories}
          deleteStory={this.props.deleteStory}
          currentUser= { this.props.currentUser }
          deleteLike={ this.props.deleteLike }
          createLike={ this.props.createLike }/>

      </main>
    );
  }

}

export default UserDetail;
