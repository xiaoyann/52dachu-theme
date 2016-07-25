import { FETCH_POSTS_SUCCESS } from 'actions/index';
import {} from '../utils';

function postsReducer(state = { 
  ids: [], 
  entities: {}
}, action) {
  if (FETCH_POSTS_SUCCESS === action.type) {
    let ids = [], map = {};
    let dataArr = action.data || [];
    dataArr.forEach((item) => {
      ids.push(item.id);
      map[item.id] = item;
    });
    // return Object.assign({}, state, {
    //   ids: union(),
    //   entities: 
    // });
  }

  return state;
}

export default function (state = {}, action) {
  return { 
    posts:  postsReducer(state.posts, action)
  };
}
