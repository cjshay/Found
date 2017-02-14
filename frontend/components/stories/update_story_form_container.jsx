import { connect } from 'react-redux';
import UpdateStoryForm from './update_story_form';
import { updateStory, fetchStory } from '../../actions/story_actions';


const mapStateToProps = (state, ownProps) => {
  const storyId = ownProps.params.story_id;
  return {
    storyId: storyId,
    story: state.stories[storyId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStory: (story, storyId) => dispatch(updateStory(story, storyId)),
    fetchStory: (storyId) => dispatch(fetchStory(storyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateStoryForm);
