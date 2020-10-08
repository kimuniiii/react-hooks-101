// 外部ライブラリからのimport
import React from 'react'
import { useContext } from 'react';

// 共通実装のimport
import AppContext from '../contexts/AppContext';

// 画面固有のimport
import OperationLog from './OperationLog';

/**
 * OperationLogsコンポーネント
 * 操作ログ一覧表のｈひな型を返すコンポーネント
 * @return JSX
 */

const OperationLogs = () => {

  const { state } = useContext(AppContext);

  return (
    <>
    <h4>操作ログ一覧</h4>
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>内容</th>
          <th>日時</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          { state.operationLogs.map((cur,idx) => ( <OperationLog key={idx} cur={cur} /> )) }
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default OperationLogs;
