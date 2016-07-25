if (process.env.NODE_ENV === 'development') {
  var domain = 'http://localhost:8360/api';
} else {
  var domain = 'https://52dachu.com/api';
}

export const posts = domain + '/post';