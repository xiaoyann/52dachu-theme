if (process.env.NODE_ENV === 'development') {
  // var domain = 'http://localhost:8360/api';
  var domain = 'http://52dachu.com/api';
} else {
  var domain = '/api';
}

export const POSTS_LIST   = domain + '/post/list';
export const POSTS_DETAIL = domain + '/post/detail';