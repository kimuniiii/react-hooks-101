
//! ==========
//! 要件の整理
//! ==========

// どんなactionを受け取るか？

/*
action = {
  type : 'CREATE_EVENT',
  title : '2020年東京オリンピックのお知らせ',
  body : '2020年に東京でオリンピックを開催します',
}
*/

// どうやって場合分けをすれば良いか？

//? stateが空の場合

//! before

// state = []

//! after

/*
state = [
    {
        id : 1,
        title : '2020年東京オリンピックのお知らせ',
        body : '2020年に東京でオリンピックを開催します',
    }
]
*/

//? stateが空でない場合

//! before

/*
state = [
    {id: 1, title: 'タイトル1', body: 'ボディ1'},
    {id: 2, title: 'タイトル2', body: 'ボディ2'},
    {id: 3, title: 'タイトル3', body: 'ボディ3'}
]
*/

//! after

/*
state = [
    {id: 1, title: 'タイトル1', body: 'ボディ1'},
    {id: 2, title: 'タイトル2', body: 'ボディ2'},
    {id: 3, title: 'タイトル3', body: 'ボディ3'},
    {id: 4, title : '2020年東京オリンピックのお知らせ', body : '2020年に東京でオリンピックを開催します'}
]
*/

import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from '../actions';

/**
 * @概要 Reducer関数
 * @説明 古いステートとアクションを受け取って新しいステートを返す純粋関数
 * @param {Array} [state=[]]
 * @param {Object} action
 * @returns {Array} new State
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