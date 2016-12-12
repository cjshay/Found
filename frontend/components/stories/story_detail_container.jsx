import { connect } from 'react-redux';
import StoryDetail from './story_detail';
import { fetchStory } from '../../actions/story_actions';
import { selectStories } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const storyId = ownProps.params.story_id;

  return {
    storyId: storyId,
    story: state.stories[storyId]
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
