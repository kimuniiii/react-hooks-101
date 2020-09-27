import React, { useState } from 'react';

//! ===================
//! 複数の状態を管理する
//! ===================

const MultipleState = (props) => {

  // 初期値を受け取り2つの要素を持つ配列を返す
  const [name, setName] = useState(props.name);
  const [price,setPrice] = useState(props.price);

  const increment = () => {
    setPrice(price + 1);
  }

  const decrement = () => {
    setPrice(price - 1);
  }

  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  }

  return (
  <React.Fragment>
    <p>現在の{name}は{price}円です</p>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>reset</button>
    <input value={name} onChange={e => setName(e.target.value)}/>
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