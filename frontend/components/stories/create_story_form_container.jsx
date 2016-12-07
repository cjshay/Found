import { connect } from 'react-redux';
import CreateStoryForm from './create_story_form';
import { createStory } from '../../actions/story_actions';


const mapStateToProps = ({ session }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStory: (story) => dispatch(createStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStoryForm);
