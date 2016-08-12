import { POSTS_LIST, POSTS_DETAIL } from 'conf/api';

export function fetchPosts() {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: 'update', path: 'posts.isFetching' });
    try {
      response = await fetch(POSTS_LIST, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: 'update', path: 'posts.errorMessage', data: e.message });
      return;
    }
    dispatch({ type: 'update', path: 'posts', data: response.data.posts });
  }
}


export function fetchDetail(pathname) {
  return async (dispatch, getState) => {
    let response, options = { method: 'GET' };
    dispatch({ type: 'update', path: 'posts.isFetching' });
    try {
      response = await fetch(`${POSTS_DETAIL}?pathname=${pathname}`, options)
        .then(response => response.json());
    } catch(e) {
      dispatch({ type: 'update', path: 'posts.errorMessage', data: e.message });
      return;
    }
    dispatch({ type: 'update', path: 'posts.data', data: response.data });
  }
}


