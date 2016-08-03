if (process.env.NODE_ENV === 'development') {
  var domain = 'http://localhost:8360';
} else {
  var domain = 'https://52dachu.com';
}

export const posts = domain;
export const postsDetail = domain + '/post'