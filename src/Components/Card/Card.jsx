import React from 'react';

import '../../assets/css/card.css';
import '../../assets/css/post.css';
import '../../assets/css/comment.css';
import '../../assets/css/avatar.css';

export const Card = ({ title, author, num_comments, url, upvotes }) => {
  return (
    <article className="card">
      <div className="post-wrapper">
        <div className="post-votes-container">
          <button
            type="button"
            className="icon-action-button up-vote false"
            aria-label="Up vote"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              className="icon-action"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"></path>
            </svg>
          </button>
          <p className="post-votes-value ">{upvotes ? upvotes.toLocaleString() : '0'}</p>
          <button
            type="button"
            className="icon-action-button down-vote false"
            aria-label="Down vote"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.2"
              baseProfile="tiny"
              viewBox="0 0 24 24"
              className="icon-action"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"></path>
            </svg>
          </button>
        </div>
        <div className="post-container">
          <h3 className="post-title">{title ? title : 'Placeholder Title'}</h3>
          <div className="post-image-container">
            <img
              src={url ? url : 'https://via.placeholder.com/300'}
              className="post-image"
              alt={title ? title : 'Placeholder Title'}
            />
          </div>
          <div className="post-details">
            <span className="author-details">
              <img
                src="/reddit-logo.svg"
                alt="Blue reddit icon"
                className="avatar-profile-image"
              ></img>
              <span className="author-username">{author ? author : 'Placeholder Author'}</span>
            </span>
            <span className="post-comments-container">
              <button
                type="button"
                className="icon-action-button false"
                aria-label="Show comments"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  className="icon-action"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path>
                </svg>
              </button>
              {num_comments ? num_comments : '0'}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
