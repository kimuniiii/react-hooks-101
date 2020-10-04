// 外部モジュール
import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 内部モジュール
import reducer from '../reducers';
import Event from '../components/Event'

// Appコンポーネント
const App = () => {
  const [state, dispatch] = useReducer(reducer,[]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault()
    console.log({title,body});
    dispatch({
      type:'CREATE_EVENT',
      title,
      body
    })
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  console.log({state});

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>

      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>
            タイトル
          </label>
          <input className='form-control' id='formEventTitle' value={title} onChange={handleChange}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>
            ボディー
          </label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>
        </div>
      </form>

        <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
        <button className='btn btn-danger'>全てのイベントを削除する</button>

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

    </div>
  )
}

export default App;