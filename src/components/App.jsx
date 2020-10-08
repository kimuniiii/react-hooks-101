// 外部ライブラリからのimport
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useReducer } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext'

// 画面固有のimport
import EventForm from './EventForm';
import events from '../reducers';
import Events from './Events';
import OperationLogs from './OperationLogs';

/**
 * Appコンポーネント
 * 階層構造の最上位に位置するコンポーネント
 *
 * @return 子コンポーネント
 */

const App = () => {

  const KEY_STORAGE = 'appWithRedux';
  const appState = localStorage.getItem(KEY_STORAGE);
  const initialState = appState ? JSON.parse(appState) : { events: [], operationLogs: [] }
  const [state, dispatch] = useReducer(events,initialState);

  useEffect(() => {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(state));
  },[state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
    <div className='container-fluid'>
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
    </AppContext.Provider>
  )
}

export default App;