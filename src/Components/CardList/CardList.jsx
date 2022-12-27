import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import { getPosts, selectIsLoading, selectPosts } from '../../Features/reddit/redditSlice';

import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

export const CardList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  let { subreddit } = useParams();

  subreddit = subreddit === undefined ? 'home' : subreddit;

  useEffect(() => {
    dispatch(getPosts(subreddit));
  }, [dispatch, subreddit]);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post, index) => {
          return (
            <Card
              key={index}
              title={post.title}
              author={post.author}
              num_comments={post.num_comments}
              url={post.url}
              upvotes={post.ups}
            />
          );
        })
      )}
    </main>
  );
};
