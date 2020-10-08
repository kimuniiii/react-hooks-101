// 外部ライブラリからのimport
import React from 'react';

/**
 * OperationLogコンポーネント
 * 操作ログ一覧の具体的な内容を返すコンポーネント
 * @return JSX
 */

const OperationLog = ({ cur }) => {

  return (
    <tr>
      <td>{cur.description}</td>
      <td>{cur.operatedAt}</td>
    </tr>
  )
}

export default OperationLog;