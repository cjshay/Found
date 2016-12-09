import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import StoriesIndexContainer from './stories_index_container';

class StoryDetail extends React.Component {
  // componentDidMount() {
  //   this.props.fetchStory(this.props.storyId);
  // <StoriesIndexContainer />
  // <h2>Make a Response</h2>
  // <CreateStoryFormContainer parentId={this.props.storyId}/>
  // }
  //
  //     } else {
  //       return(<div>Loading...asdasd</div>);
  //     }
  //   }
  // }
  // <StoriesIndexContainer storyId={this.props.storyId}/>

  render() {

    return (
      <main>
          <h2>Make a Response</h2>
          <CreateStoryFormContainer parentId={this.props.storyId}/>
          <StoriesIndexContainer parentId={this.props.storyId}/>
      </main>
    );
  }
}


export default StoryDetail;
