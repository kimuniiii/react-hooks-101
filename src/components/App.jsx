// 外部ライブラリからのimport
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';

// 画面固有のimport
import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers';

/**
 * @概要 Appコンポーネント
 * @説明 階層構造の最上位に位置するコンポーネント
 * @params
 * @return 子コンポーネント
 */

const App = () => {

  //? useReducerを用いた状態管理
  // stateは個々に独立している
  // 同じstateを共有する必要がある
  const [state, dispatch] = useReducer(reducer,[]);

  return (
    <div className='container-fluid'>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  )
}

export default App;