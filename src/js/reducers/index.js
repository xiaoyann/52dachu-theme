import { combineReducers } from 'redux';
import * as _ from 'bali.js';
import { 
  POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE,
  DETAIL_REQUEST, DETAIL_SUCCESS, DETAIL_FAILURE,
  ERROR_MESSAGE_RESET
} from 'actions/index';

let initPosts = {
  keys: [],
  data: {},
  isFetching: false,
  nextPageUrl: '',
  errorMessage: ''
};

function postsReducer(state = initPosts, action) {
  if (POSTS_REQUEST === action.type) {
    return _.assign({}, state, {
      isFetching: true
    });
  }

  else if (POSTS_SUCCESS === action.type) {
    let keys, map = {};
    keys = action.posts.map(item => {
      map[item.pathname] = _.assign({}, item, {
        create_time: (new Date(item.create_time)).toLocaleDateString()
      });
      return item.pathname;
    });
    return _.assign({}, state, {
      keys: _.union(state.keys, keys),
      data: _.assign({}, state.data, map),
      isFetching: false
    });
  }

  else if (POSTS_FAILURE === action.type) {
    return _.assign({}, state, {
      errorMessage: action.message
    });
  }

  else if (ERROR_MESSAGE_RESET === action.type) {
    return _.assign({}, state, {
      errorMessage: ''
    });
  }

  else if (DETAIL_REQUEST === action.type) {
    return _.assign({}, state, {
      isFetching: true
    });
  }

  else if (DETAIL_SUCCESS === action.type) {
    let data = {};
    let posts = action.posts;
    data[posts.pathname] = _.assign({}, posts, {
      create_time: (new Date(posts.create_time)).toLocaleString()
    });
    return _.assign({}, state, {
      data: _.assign({}, state.data, data)
    });
  }

  else if (DETAIL_FAILURE === action.type) {
    return _.assign({}, state, {
      errorMessage: action.message
    });
  }

  return state;
}

export default combineReducers({
  posts: postsReducer
});
