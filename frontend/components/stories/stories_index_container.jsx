import { connect } from 'react-redux';
import StoriesIndex from './stories_index';
import { fetchStories } from '../../actions/story_actions';
import { selectStories } from '../../reducers/selectors';

const mapStateToProps = ({ stories, session }) => {
  return {
    stories: selectStories(stories),
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => dispatch(fetchStories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
