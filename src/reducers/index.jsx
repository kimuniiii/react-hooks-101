// 外部ライブラリからのimport
import { combineReducers } from 'redux';

// 画面固有のimport
import events from './events';
import operationLogs  from './operationLogs';

export default combineReducers({ events, operationLogs });

