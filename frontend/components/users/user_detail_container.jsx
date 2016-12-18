import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { createFollow, deleteFollow, fetchUser, updateUser  } from '../../actions/user_actions';
import { fetchStories, deleteStory } from '../../actions/story_actions';
import { selectUserStories } from '../../reducers/selectors';
import { createLike, deleteLike } from '../../actions/story_actions';


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.params.user_id;
  let username;
  if (state.users.userDetail){
    username = state.users.userDetail.username;
  }

  return {
    users: state.users,
    user: state.users.userDetail,
    username: username,
    userId: userId,
    stories: selectUserStories(state.stories, userId),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFollow: (followeeId) => dispatch(createFollow(followeeId)),
    deleteFollow: (followeeId) => dispatch(deleteFollow(followeeId)),
    fetchUserStories: () => dispatch(fetchStories()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createLike: (story) => dispatch(createLike(story)),
    deleteLike: (story) => dispatch(deleteLike(story)),
    deleteStory: (story) => dispatch(deleteStory(story)),
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
