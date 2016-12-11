import { connect } from 'react-redux';
import StoriesIndex from './stories_index';
import { fetchStories, createLike, deleteLike } from '../../actions/story_actions';
import { selectStories, selectResponses } from '../../reducers/selectors';

const mapStateToProps = ({ stories, session }, ownProps) => {
  return {
    stories: selectStories(stories),
    currentUser: session.currentUser,
    parentId: ownProps.parentId,
    storyId: ownProps.storyId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    createLike: (story) => dispatch(createLike(story)),
    deleteLike: (story) => dispatch(deleteLike(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
