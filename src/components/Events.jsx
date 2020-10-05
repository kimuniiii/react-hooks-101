// 外部ライブラリからのimport
import React, { useContext } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext';

// 画面固有のimport
import Event from './Event';

/**
 * Eventsコンポーネント
 *
 * @param {Object} props
 * @return JSX
 */

const Events = ({ state, dispatch }) => {

  const value = useContext(AppContext);

  return (
    <>
      <div>{value}</div>
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
