import React from 'react';
import { StoryIndexItem } from './story_index_item';

const ResponsesIndexItems = ({ responses }) => {

  return (
    <ul className="response-list group">
      { responses.reverse().map(response => <StoryIndexItem key={ response.id } story={ response }/>) }
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
          <ResponsesIndexItems responses={ this.props.responses }/>
        </section>
      );
    }
  }
}

export default ResponsesIndex;
