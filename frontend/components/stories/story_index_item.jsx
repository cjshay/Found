import React from 'react';
import { Link } from 'react-router';

// TODO: Current user has no id, change the state shape so that author has just id and points to state shape
export const StoryIndexItem = (props) => {
  const toggleHeart = () => {
    if (props.story.likers.includes(props.currentUser.username)) {
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
            <li><Link
              to={"/users/" + props.story.author.id}>
              { props.story.author.username }
            </Link></li>
            <li>
              <ul className="story-item-date-and-length group">
                <li>{props.story.length} min read</li>
                <li>Dec { props.story.date.day }</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="story-item-title">
          <Link to={"/story/" + props.story.id}>{props.story.title}</Link>
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
          <li>{props.story.likes}</li>
        </ul>
      </ul>
    </li>
  );
};
