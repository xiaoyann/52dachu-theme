import { posts } from 'conf/api';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// fetch posts by paging
export function fetchPosts() {
  return function(dispatch, getState) {
    fetch(posts)
      .then(resp => resp.json())
      .then(resp => {
        if (process.env.NODE_ENV === 'development') {
          console.log(resp);
        }
        dispatch({ type: FETCH_POSTS_SUCCESS, data: resp.data });
      });
  }
}
