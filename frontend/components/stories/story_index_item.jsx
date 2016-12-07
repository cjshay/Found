import React from 'react';
import { Link } from 'react-router';


export const StoryIndexItem = (props) => {
  return (
    <li>
      <ul>
        <li>{ props.story.author.username }</li>
        <li>author description</li>
        <li>
          <Link
            to={"/story/" + props.story.id}>{ props.story.title }
          </Link>
        </li>
        <li>
          <Link
            to={"/story/" + props.story.id}>{ props.story.content }
          </Link>
        </li>
      </ul>
    </li>
  );
};
