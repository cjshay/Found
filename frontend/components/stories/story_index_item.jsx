import React from 'react';
import { Link } from 'react-router';

// TODO: Current user has no id, change the state shape so that author has just id and points to state shape
export const StoryIndexItem = (props) => {
  const toggleHeart = () => {
    if (props.currentUser === null) {
      return (<li><Link to="/signin"><img src={window.images.heart} /></Link></li>);
    } else if (props.currentUser !== null && props.story.likers.includes(props.currentUser.username)) {
      return (<li onClick={toggleLike}><img src={window.images.filled_heart} /></li>);
    }
    return (<li onClick={toggleLike}><img src={window.images.heart} /></li>);
  };
  const toggleLike = () => {
    if (props.currentUser !== null) {
      if (props.story.likers.includes(props.currentUser.username)) {
        props.deleteLike(props.story);
        return toggleLike;
      } else {
        props.createLike(props.story);
        return toggleLike;
      }
    }

  };

  const likes = () => {
    if (props.story.likes > 0) {
      return props.story.likes;
    }
    return "";
  };

  const deleteStory = () => {
    props.deleteStory(props.story.id);
  };

  const deleteAndUpdate = () => {
    if (props.currentUser !== null && props.currentUser.id === props.story.author.id) {
      return (
        <ul className="update-delete group">
          <li>
            <Link to={"/story/" + props.story.id + "/edit"}><button className="update-button">
              Edit</button></Link>
          </li>
          <li>
            <button className="delete-button" onClick={deleteStory}>Delete</button>
          </li>
        </ul>
      );
    }
    return (<ul></ul>);
  };
  let content;
  if (props.story.content.length < 120) {
    content = props.story.content;
  } else {
    content = props.story.content.slice(0, 120) + "...";
  }
  return (
    <li className="story-item group">
      <ul>
        <li>
          <ul className= "story-item-profile group">
            <li>
              <Link to={"/users/" + props.story.author.id}>
                <img className="story-item-user-image" src={ props.story.author.image_url }/>
              </Link>
            </li>
            <li id="story-item-username"><Link
              to={"/users/" + props.story.author.id}>
              { props.story.author.username }
            </Link></li>
            <li>
              <ul className="story-item-date-and-length group">
                <li>{props.story.length} min read</li>
                <li>Jan { props.story.date.day }</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="story-item-title">
          <Link to={"/story/" + props.story.id}>{props.story.title}</Link>
        </li>
        <li>
          <div className="story-item-image-div">
            <Link to={"/story/" + props.story.id}>
              <img src={ props.story.image_url }/>
            </Link>
          </div>
        </li>
        <li className="story-item-content">
          <Link
            to={"/story/" + props.story.id}>{ content }
          </Link>
        </li>
        <li className="story-detail-link">
          <Link
          to={"/story/" + props.story.id}>Read More...
          </Link>
        </li>
        <ul className="story-likes group">
          {toggleHeart()}
          <li>{likes()}</li>
        </ul>
        {deleteAndUpdate()}
      </ul>
    </li>
  );
};
