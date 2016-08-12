import { combineReducers } from 'redux';
import * as _ from 'bali.js';
import Reducer from 'reducer';

let initState = {
  posts: {
    keys: [],
    data: {},
    isFetching: false,
    nextPageUrl: '',
    errorMessage: ''
  }
};

let reducer = new Reducer();


// 文章列表请求成功
function postsSuccess(state, posts) {
  let keys, map = {};
  keys = posts.map(item => {
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


// 更新文章详细信息
function detailSuccess(state, posts) {
  let data = {};
  data[posts.pathname] = _.assign({}, posts, {
    create_time: (new Date(posts.create_time)).toLocaleString()
  });
  return _.assign({}, state, data);
}


// 请求开始时更新 isFetching 状态
function requestStart() {
  return true;
}


reducer.register('update', 'posts.isFetching', requestStart);
reducer.register('update', 'posts', postsSuccess);
reducer.register('update', 'posts.data', detailSuccess);

reducer.register('update', 'posts.errorMessage', (_, e) => e);
reducer.register('reset', 'posts.errorMessage', () => '');


export default (state = initState, action) => reducer.reduce(state, action)


