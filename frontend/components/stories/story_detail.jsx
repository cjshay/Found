import React from 'react';
import CreateStoryFormContainer from './create_story_form_container';
import ResponsesIndexContainer from './responses_index_container';
import { Link } from 'react-router';


class StoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }
  componentDidMount() {

    this.props.fetchStory(this.props.storyId);
  }
  toggleHeart () {
    if (this.props.currentUser !== null && this.props.story.likers.includes(this.props.currentUser.username)) {
      return (<li onClick={this.toggleLike}><img src={window.images.filled_heart} /></li>);
    }
    return (<li onClick={this.toggleLike}><img src={window.images.heart} /></li>);
  }

  toggleLike() {
    if (this.props.currentUser !== null) {
      if (this.props.story.likers.includes(this.props.currentUser.username)) {
        this.props.deleteLike(this.props.story);
      } else {
        this.props.createLike(this.props.story);
      }
    }

  }

  toggleFollow() {
    if (this.props.currentUser !== null) {
      if (this.props.currentStory.author.follows.follower_ids.includes(this.props.currentUser.id)) {
        this.props.deleteFollow(this.props.currentStory.author.id);
        return this.toggleFollow;
      } else {
        this.props.createFollow(this.props.currentStory.author.id);
        return this.toggleFollow;
      }
    }
  }

  followButton() {
    if (this.props.currentUser === null ||
      this.props.currentStory === undefined ||
      this.props.currentUser.id === this.props.currentStory.author.id) {
      return (<div></div>);
    }
    const following =
    this.props.currentStory.author.follows.follower_ids
    .includes(this.props.currentUser.id);
    if (following) {
      return (<button className="following"onClick={this.toggleFollow}>Following</button>);
    }
    return (<button className="follow" onClick={this.toggleFollow}>Follow</button>);
  }


  render() {
    let description;
    if (this.props.currentUser === null) {
      description = null;
    } else {
      description = this.props.currentUser.description;
    }
    if (this.props.story !== undefined) {
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
                        <li>{this.followButton()}</li>
                        </ul>
                      </li>
                      <li className="detail-profile-description">{description}</li>
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
                  {this.toggleHeart()}
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
    }
    return (<div>Load</div>);
  }
}


export default StoryDetail;
