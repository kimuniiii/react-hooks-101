// 画面固有のimport
import { ADD_OPERATION_LOG, DELETE_ALL__OPERATION_LOGS } from '../actions';

/**
 * 操作ログのReducer
 * 古いステートとアクションを受け取って新しいステートを返す純粋関数
 * @param {Array} state
 * @param {Object} action
 * @return {Array} new state
 */

const operationLogs = (state = [], action) => {
  switch(action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      }
      return [operationLog, ...state]
    case DELETE_ALL__OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs;