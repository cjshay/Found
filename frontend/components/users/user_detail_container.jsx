import { connect } from 'react-redux';
import { UserDetail } from './user_detail';
import { createFollow, deleteFollow } from '../../actions/user_actions';
import { selectStories } from '../../reducers/selectors';

const mapStateToProps = ({ users, stories }, ownProps) => {
  const userId = ownProps.params.userId;
  return {
    user: users.userId,
    stories: selectStories(stories)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFollow: (followeeId) => dispatch(createFollow(followeeId)),
    deleteFollow: (followeeId) => dispatch(createFollow(followeeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
