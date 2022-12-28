import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../assets/css/card.css';
import '../../assets/css/subreddits.css';

import { selectSelectedSubreddit } from '../../Features/reddit/redditSlice';

export const Subreddits = ({ name }) => {
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  return (
    <>
      <li className={selectedSubreddit === name ? 'selected-subreddit' : 'false'}>
        <button type="button">
          <Link
            to={`/${name}`}
            className={'link'}
          >
            <img
              src="https://via.placeholder.com/25"
              alt="subreddit-name"
              className="subreddit-icon"
              style={{ border: '3px solid' }}
            />
            <span className="subreddit-name">{name}</span>
          </Link>
        </button>
      </li>
    </>
  );
};
