// 外部ライブラリからのimport
import React,{ useState, useContext } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext';

// 画面固有のimport
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions';

/**
 * EventFormコンポーネント
 *
 * @return JSX
 */

const EventForm = () => {

  const { state, dispatch } = useContext(AppContext);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');

  const unCreatable = title === '' || body === ''

  /**
   * イベントハンドラ
   * タイトルのテキストエリアを変更するたびに発火される関数
   * @param {Object} e イベントオブジェクト
   */

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  /**
   * イベントハンドラ
   * ボディーのテキストを変更するたびに発火される関数
   * @param {Object} e イベントオブジェクト
   */

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  /**
   * イベントハンドラ
   * イベント作成ボタンをクリックしたら発火される関数
   * @param {Object} e イベントオブジェクト
   */

  const addEvent = (e) => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
  }

  /**
   * イベントハンドラ
   * 全てのイベントを削除するボタンをクリックしたら発火
   * @param {Object} e イベントオブジェクト
   */

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result) dispatch({ type: DELETE_ALL_EVENT })
  }

  return (
  <>
    <h4>イベント作成フォーム</h4>

    <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>
            タイトル
          </label>
          <input className='form-control' id='formEventTitle' value={title} onChange={handleTitleChange}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>
            ボディー
          </label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={handleBodyChange}></textarea>
        </div>

        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>
    </form>
  </>
  )
}

export default EventForm;