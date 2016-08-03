import { POSTS_LIST, POSTS_DETAIL } from 'conf/api';


export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export function fetchPosts() {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: POSTS_REQUEST});
    try {
      response = await fetch(POSTS_LIST, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: POSTS_FAILURE, message: e.message });
      return;
    }
    dispatch({ type: POSTS_SUCCESS, posts: response.data.posts });
  }
}


export const DETAIL_REQUEST = 'DETAIL_REQUEST';
export const DETAIL_SUCCESS = 'DETAIL_SUCCESS';
export const DETAIL_FAILURE = 'DETAIL_FAILURE';

export function fetchDetail(pathname) {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: DETAIL_REQUEST });
    try {
      response = await fetch(`${POSTS_DETAIL}?pathname=${pathname}`, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: DETAIL_FAILURE, message: e.message });
      return;
    }
    dispatch({ type: DETAIL_SUCCESS, posts: response.data });
  }
}


export const ERROR_MESSAGE_RESET = 'ERROR_MESSAGE_RESET';