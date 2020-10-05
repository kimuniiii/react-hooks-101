import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from '../actions';

/**
 * Reducer関数
 * 古いステートとアクションを受け取って新しいステートを返す純粋関数
 * @param {Array} state
 * @param {Object} action
 * @return {Array} new State
 */

const reducer = (state = [], action) => {
  switch(action.type) {
      case CREATE_EVENT:
          const event = { title : action.title, body : action.body }
          const length = state.length;
          const id = length === 0 ? 1 : state[length - 1].id + 1;
          return [...state,{ id : id, ...event}];
      case DELETE_EVENT:
          return state.filter(event => event.id !== action.id);
      case DELETE_ALL_EVENT:
          return [];
      default:
          return state;
  }
}

export default reducer;