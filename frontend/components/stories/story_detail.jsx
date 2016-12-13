import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import ResponsesIndexContainer from './responses_index_container';
import { Link } from 'react-router';


class StoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }
  componentDidMount() {

    this.props.fetchStory(this.props.storyId);
  }

  toggleLike() {
    if (this.props.currentUser !== null) {
      if (this.props.story.likers.includes(this.props.currentUser.username)) {
        this.props.deleteLike(this.props.story);
        return this.toggleLike;
      } else {
        this.props.createLike(this.props.story);
        return this.toggleLike;
      }
    }

  }

  render() {

    if (this.props.story !== undefined) {
      const toggleLike = () => {
        if (this.props.currentUser !== null) {
          if (this.props.story.likers.includes(this.props.currentUser.username)) {
            this.props.deleteLike(this.props.story);
            return toggleLike;
          } else {
            this.props.createLike(this.props.story);
            return toggleLike;
          }
        }
      };

      return (
        <main>
          <section className="story-detail-section">
            <ul className="story-detail">
              <li>
                <ul className= "story-detail-profile group">
                  <li className="detail-profile-picture"></li>
                  <li className="detail-profile-info">
                    <ul>
                      <li>
                        <ul className="detail-profile-username-and-follow group">
                          <li><Link
                            to={"/users/" + this.props.story.author.id}>
                            { this.props.story.author.username }
                          </Link></li>
                        <li><button>Follow</button></li>
                        </ul>
                      </li>
                      <li className="detail-profile-description">{this.props.currentUser.description}</li>
                      <li>
                        <ul className="detail-story-date group">
                          <li>{this.props.story.length} min read</li>
                          <li>Dec {this.props.story.date.day}</li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>

              <li className="story-detail-title">{this.props.story.title}</li>
              <li className="story-detail-content" >{this.props.story.content}</li>
              <li>
                <ul className="detail-story-likes group">
                  <li onClick={this.toggleLike}><img src={window.images.heart} /></li>
                  <li>{this.props.story.likes}</li>
                </ul>
              </li>
            </ul>
          </section>
          <section className= "response-section group">
            <h6 className="create-responses-header">Write a Response</h6>
            <CreateStoryFormContainer parentId={this.props.storyId}/>
            <ResponsesIndexContainer parentId={this.props.storyId}/>
          </section>
        </main>
      );
    } else {
      return (<div>Load</div>);
    }
  }
}


export default StoryDetail;
