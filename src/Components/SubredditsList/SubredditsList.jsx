import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSubreddits,
  selectIsLoading,
  selectSubreddits,
} from '../../Features/subreddits/subredditsSlice';
import { Loader } from '../Loader/Loader';

import { Subreddits } from '../Subreddits/Subreddits';

export const SubredditsList = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  return (
    <aside>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card subreddit-card">
          <h2>Subreddits</h2>
          <ul className="subreddits-list">
            {subreddits.map((subreddit, index) => {
              return (
                <Subreddits
                  key={index}
                  name={subreddit.display_name_prefixed}
                />
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
};
