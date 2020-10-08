// 外部ライブラリからのimport
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext'

// 画面固有のimport
import EventForm from './EventForm';
import Events from './Events';
import events from '../reducers';

/**
 * Appコンポーネント
 * 階層構造の最上位に位置するコンポーネント
 *
 * @return 子コンポーネント
 */

const App = () => {

  const initialState = { events: [], operationLogs: [] }
  const [state, dispatch] = useReducer(events,initialState);

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