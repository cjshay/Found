import { connect } from 'react-redux';
import ResponsesIndex from './responses_index';
import { fetchResponses, createLike, deleteLike, deleteStory  } from '../../actions/story_actions';
import { selectStories, selectResponses } from '../../reducers/selectors';

const mapStateToProps = ({ stories, session }, ownProps) => {
  return {
    responses: selectResponses(stories, ownProps.parentId),
    currentUser: session.currentUser,
    parentId: ownProps.parentId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResponses: (parentId) => dispatch(fetchResponses(parentId)),
    createLike: (story) => dispatch(createLike(story)),
    deleteLike: (story) => dispatch(deleteLike(story)),
    deleteStory: (story) => dispatch(deleteStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponsesIndex);
