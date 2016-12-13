import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { createFollow, deleteFollow, fetchUser  } from '../../actions/user_actions';
import { fetchStories } from '../../actions/story_actions';
import { selectUserStories } from '../../reducers/selectors';

const mapStateToProps = ({ users, stories }, ownProps) => {
  const userId = ownProps.params.user_id;

  debugger
  return {
    user: users[userId],
    userId: userId,
    stories: selectUserStories(stories, userId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFollow: (followeeId) => dispatch(createFollow(followeeId)),
    deleteFollow: (followeeId) => dispatch(createFollow(followeeId)),
    fetchUserStories: () => dispatch(fetchStories()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
