// 外部ライブラリからのimport
import React, { useContext } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext';

// 画面固有のimport
import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'
import { timeCurrentIso } from '../utils';

/**
 * Eventコンポーネント
 * イベント一覧の具体的な内容を返すコンポーネント
 * @return JSX
 */

const Event = ({ event }) => {

      const { dispatch } = useContext(AppContext);

      const id = event.id
      const title = event.title
      const body = event.body

      /**
       * イベントハンドラ
       * イベント一覧の削除ボタンをクリックしたら発火
       */

      const handleClickDeleteButton = () => {
        const result = window.confirm(`イベントを(id=${id})本当に削除しても良いですか？`)
        if (result) {
          dispatch({ type : DELETE_EVENT, id })

          dispatch({
            type: ADD_OPERATION_LOG,
            description: `イベント(id=${id})を削除しました`,
            operatedAt: timeCurrentIso(),
          })

        }
      }

      return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
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