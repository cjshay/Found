import { connect } from 'react-redux';
import StoryDetail from './story_detail';
import { fetchStory } from '../../actions/story_actions';
import { selectStories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const pathname = ownProps.location.pathname;
  const storyId = pathname.slice(pathname.length - 1);
  return {
    story: state.stories[storyId],
    storyId: storyId
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
