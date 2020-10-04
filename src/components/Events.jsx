// 外部ライブラリからのimport
import React from 'react';

// 画面固有のimport
import Event from './Event';

/**
 * @概要 Eventsコンポーネント
 * @説明
 * @param {*} { state, dispatch }
 * @returns イベント一覧表
 */

const Events = ({ state, dispatch }) => {
  return (
    <>
      <h4>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { state.map((event,index) => ( <Event key={index} event={event} dispatch={dispatch}/>)) }
          </tbody>
        </table>
    </>
  )
}

export default Events;
