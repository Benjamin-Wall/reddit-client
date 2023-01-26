# Reddit Client

The live website can be found here: https://codecademy-reddit-client.netlify.app/

In this project, i will be building a Reddit Client that uses the Reddit [undocumented JSON API](https://github.com/reddit-archive/reddit/wiki/JSON) for the final front end engineer course from [codecademy](https://www.codecademy.com/)

You can take any Reddit URL, add .json at the end of it, and get JSON. For example, if you want to get the Popular page data in JSON:

- Original URL: `https://www.reddit.com/r/popular/`
- JSON URL: `https://www.reddit.com/r/popular.json`

If you want to search for `"cake recipes"`:

- Original URL: `https://www.reddit.com/search?q=cake%20recipes`
- JSON URL: `https://www.reddit.com/search.json?q=cake%20recipes`

---

## Project Goals

In this project, my goal is to build a functional Reddit Application that makes use of frameworks like [React](https://reactjs.org/) and [Redux](https://redux.js.org/). The goal is to enable navigation using [React Router](https://reactrouter.com/en/main) providing a seamless integration.

---

## Known Issues

Here are the following issues:

- When at the root of the page the "r/Home" should be highlighted but its not.
- The subreddit name is misaligned in the subreddit list.
- There is only minimal error handling in terms of searching for subreddits.
- Page general CSS could be improved to provide a more user friendly responsive experience.
- Make Unit Tests that test the components (and functions) of the application.

---

## Confession

While most of the files (Components, State) are written by me (Benjamin), the general structure of the site (CSS and HTML) is copied by hand from the [example website](https://reddit-client.netlify.app/) provided by codecademy, this is because i suck at CSS, in the future i would like to hone my CSS and HTML skills but for now i am more focused on the logic side of my application.

---
