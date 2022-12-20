import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  selectIsLoading,
  selectPosts,
} from "../../Features/reddit/redditSlice";

import { Card } from "../Card/Card";

export const CardList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <main>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
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
