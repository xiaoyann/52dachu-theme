import { posts } from 'conf/api';


export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export function fetchPosts() {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: POSTS_REQUEST});
    try {
      response = await fetch(posts, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: POSTS_FAILURE, message: e.message });
      return;
    }
    dispatch({ type: POSTS_SUCCESS, posts: response.data });
  }
}


export const DETAIL_REQUEST = 'DETAIL_REQUEST';
export const DETAIL_SUCCESS = 'DETAIL_SUCCESS';
export const DETAIL_FAILURE = 'DETAIL_FAILURE';

export function fetchDetail(id) {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: DETAIL_REQUEST });
    try {
      response = await fetch(`${posts}/${id}`, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: DETAIL_FAILURE, message: e.message });
      return;
    }
    dispatch({ type: DETAIL_SUCCESS, posts: response.data });
  }
}


export const ERROR_MESSAGE_RESET = 'ERROR_MESSAGE_RESET';