import React, { useState } from 'react';

//! ===================
//! 複数の状態を管理する
//! ===================

const MultipleState = (props) => {

  // 初期値を受け取り2つの要素を持つ配列を返す
  const [state, setState] = useState(props);
  console.log(state);

  // オブジェクトの分割代入
  const { name , price } = state;

  const increment = () => {
    setState({...state, price : price + 1});
  }

  const decrement = () => {
    setState({...state , price : price - 1})
  }

  const reset = () => {
    setState(props)
  }

  return (
  <React.Fragment>
    <p>現在の{name}は{price}円です</p>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>reset</button>
    <input value={name} onChange={e => setState({...state, name : e.target.value})}/>
  </React.Fragment>
  )
}

//! ============
//! defaultProps
//! ============

//? defaultProps（プロパティ）
// propsに値が渡されなかった際のデフォルト値を定義できる

MultipleState.defaultProps = {
  name : 'サンプル',
  price : 1000
}

export default MultipleState;