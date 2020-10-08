// 外部ライブラリからのimport
import React, { useContext } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext';

// 画面固有のimport
import Event from './Event';

/**
 * Eventsコンポーネント
 * イベント一覧表のひな型を返すコンポーネント
 * @return JSX
 */

const Events = () => {

  const { state } = useContext(AppContext);

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
            { state.events.map((event,index) => ( <Event key={index} event={event}/>)) }
          </tbody>
        </table>
    </>
  )
}

export default Events;