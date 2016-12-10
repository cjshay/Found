import React from 'react';
import { StoryIndexItem } from './story_index_item';

const ResponsesIndexItems = ({ responses }) => {

  return (<ul>
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
      return (<div>Loading...</div>);
    } else {
      return (
        <section className="main-content-stories">
          <ResponsesIndexItems responses={ this.props.responses }/>
        </section>
      );
    }
  }
}

export default ResponsesIndex;
