// 外部ライブラリからのimport
import React,{ useState } from 'react';

// 画面固有のimport
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions';

/**
 * @概要 EventFormコンポーネント
 * @説明
 * @param { state, dispatch } useReducerの返り値
 * @return イベント作成フォーム
 */
const EventForm = ({ state, dispatch }) => {

  // useStateを用いた状態管理
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  /**
   * @概要 イベントハンドラ
   * @説明 イベント作成ボタンをクリックしたら発火される関数
   * @param {*} e イベントオブジェクト
   * @return dispatch関数
   */

  const addEvent = (e) => {
    e.preventDefault()
    return dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
  }

  /**
   * @概要 イベントハンドラ
   * @説明 全てのイベントを削除するボタンをクリックしたら発火
   * @param {*} e イベントオブジェクト
   * @returns dispatch関数
   */

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) {
      return dispatch({ type: DELETE_ALL_EVENT })
    }
  }

  const unCreatable = title === '' || body === ''

  // 返り値
  return (
  <>
    <h4>イベント作成フォーム</h4>

    <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>
            タイトル
          </label>
          <input className='form-control' id='formEventTitle' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>
            ボディー
          </label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>
        </div>

        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
    </form>
  </>
  )
}

export default EventForm;