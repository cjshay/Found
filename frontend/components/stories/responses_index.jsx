import React from 'react';
import { StoryIndexItem } from './story_index_item';

const ResponsesIndexItems = ({ responses, currentUser, deleteLike, createLike, deleteStory }) => {
  return (
    <ul className="response-list group">
      { responses.sort().reverse().map(response => <StoryIndexItem
        key={ response.id }
        story={ response }
        deleteStory={ deleteStory }
        currentUser= { currentUser }
        deleteLike={ deleteLike }
        createLike={ createLike }/>) }
    </ul>
  );
};


class ResponsesIndex extends React.Component{
  componentDidMount() {
    this.props.fetchResponses(this.props.parentId);
  }

  render() {
    if (this.props.responses === undefined || this.props.responses.length === 0){
      return (<div></div>);
    } else {
      return (
        <section className="response-list-section">
          <h6 className="responses-header">Responses</h6>
          <ResponsesIndexItems
            responses={ this.props.responses }
            deleteStory={ this.props.deleteStory }
            currentUser={ this.props.currentUser }
            createLike={ this.props.createLike }
            deleteLike={ this.props.deleteLike }/>
        </section>
      );
    }
  }
}

export default ResponsesIndex;
