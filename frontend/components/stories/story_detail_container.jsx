import { connect } from 'react-redux';
import StoryDetail from './stories_index';
import { fetchStory } from '../../actions/story_actions';
import { selectStories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.stories[ownProps.location.pathname],
    storyId: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStory: (story) => dispatch(fetchStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
