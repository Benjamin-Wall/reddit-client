import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/card.css';
import '../../assets/css/subreddits.css';

export const Subreddits = ({ name }) => {
  return (
    <>
      <li className={name === 'r/Home' ? 'selected-subreddit' : 'false'}>
        <button type="button">
          <Link to={`/${name}`}>
            <img
              src="https://via.placeholder.com/25"
              alt="subreddit-name"
              className="subreddit-icon"
              style={{ border: '3px solid' }}
            />
            {name}
          </Link>
        </button>
      </li>
    </>
  );
};
