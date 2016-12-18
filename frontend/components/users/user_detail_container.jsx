import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { createFollow, deleteFollow, fetchUser, updateUser  } from '../../actions/user_actions';
import { fetchStories, deleteStory } from '../../actions/story_actions';
import { selectUserStories } from '../../reducers/selectors';
import { createLike, deleteLike } from '../../actions/story_actions';


const mapStateToProps = ({ users, stories, session }, ownProps) => {
  const userId = ownProps.params.user_id;

  return {
    user: users[userId],
    userId: userId,
    stories: selectUserStories(stories, userId),
    currentUser: session.currentUser
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
