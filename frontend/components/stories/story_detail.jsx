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
    this.likes = this.likes.bind(this);
  }
  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
    .then(() => $('body').scrollTop(0));
  }
  toggleHeart () {
    if (this.props.currentUser === null) {
      return (<li><Link to="/signin"><img src={window.images.heart} /></Link></li>);
    } else if (this.props.story.likers.includes(this.props.currentUser.username)) {
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
      this.props.currentStory.author === undefined ||
      this.props.currentUser.id === this.props.currentStory.author.id ||
      (this.props.story !== undefined && this.props.story.author.username === this.props.currentUser.username) ){
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

  likes() {
    if (this.props.story.likes > 0) {
      return this.props.story.likes;
    }
    return "";
  }

  render() {
    let description;
    if (this.props.currentUser === null) {
      description = null;
    } else {
      description = this.props.currentUser.description;
    }
    if (this.props.story !== undefined && this.props.story.author !== undefined) {
      return (
        <main>
          <section className="story-detail-section">
            <ul className="story-detail">
              <li>
                <ul className= "story-detail-profile group">
                  <li className="detail-profile-info">
                    <ul>
                      <li><Link to={"/users/" + this.props.story.author.id}>
                        <img className="story-detail-user-image" src={ this.props.story.author.image_url }/>
                      </Link></li>
                      <li>
                        <ul className="detail-profile-username-and-follow group">
                          <li><Link
                            to={"/users/" + this.props.story.author.id}>
                            { this.props.story.author.username }
                          </Link></li>
                        <li>{this.followButton()}</li>
                        </ul>
                      </li>
                      <li>
                        <ul className="detail-story-date group">
                          <li>{this.props.story.length} min read</li>
                          <li>Feb {this.props.story.date.day}</li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div className="story-detail-image-div">
                  <img src={ this.props.story.image_url }/>
                </div>
              </li>
              <li className="story-detail-title">{this.props.story.title}</li>
              <li className="story-detail-content" >{this.props.story.content}</li>
              <li>
                <ul className="detail-story-likes group">
                  {this.toggleHeart()}
                  <li>{this.likes()}</li>
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
