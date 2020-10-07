// 外部ライブラリからのimport
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext'

// 画面固有のimport
import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers';

/**
 * Appコンポーネント
 * 階層構造の最上位に位置するコンポーネント
 *
 * @return 子コンポーネント
 */

const App = () => {
  const initialState = { events : [] }
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
    <div className='container-fluid'>
      <EventForm />
      <Events />
    </div>
    </AppContext.Provider>
  )
}

export default App;