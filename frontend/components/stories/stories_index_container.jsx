import { connect } from 'react-redux';
import StoriesIndex from './stories_index';
import { fetchStories, createLike, deleteLike, deleteStory } from '../../actions/story_actions';
import { selectStories, selectResponses, selectFeedStories } from '../../reducers/selectors';


const mapStateToProps = ({ stories, session }, ownProps) => {
  const currentUser = session.currentUser;
  return {
    stories: selectFeedStories(stories, currentUser),
    currentUser: currentUser,
    parentId: ownProps.parentId,
    storyId: ownProps.storyId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
    createLike: (story) => dispatch(createLike(story)),
    deleteLike: (story) => dispatch(deleteLike(story)),
    deleteStory: (story) => dispatch(deleteStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
