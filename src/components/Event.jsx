// 外部ライブラリからのimport
import React from 'react';

// 画面固有のimport
import { DELETE_EVENT } from '../actions'

/**
 * Eventコンポーネント
 *
 * @param {Object} props
 * @return JSX
 */

const Event = ({ event, dispatch }) => {

      const id = event.id

      /**
       * イベントハンドラ
       * イベント一覧の削除ボタンをクリックしたら発火
       */

      const handleClickDeleteButton = () => {
        const result = window.confirm(`イベントを(id=${id})本当に削除しても良いですか？`)
        if (result) dispatch({ type : DELETE_EVENT, id })
      }

      return (
      <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button
          type='button'
          className='btn btn-danger'
          onClick={handleClickDeleteButton}>
          削除
          </button>
        </td>
      </tr>
    )
  }

export default Event;