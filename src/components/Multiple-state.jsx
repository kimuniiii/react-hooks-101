import React, { useState, useEffect } from 'react';

//! ==========
//! useEffect
//! ==========

const MultipleState = (props) => {

  // 初期値を受け取り2つの要素を持つ配列を返す
  const [state, setState] = useState(props);
  console.log(state);

  // オブジェクトの分割代入
  const { name , price } = state;

  useEffect(() => {
    console.log('componentDidMount or componentDidUpdate');
  })

  //! レンダリングごとにuseEffectが実行させるのを防ぐ方法

  // 第二引数に空の配列を渡す
  // マウント時のみ実行する
  useEffect(() => {
    console.log('componentDidMount');
  },[]);

  // 第二引数に値の配列を渡す
  // nameが更新されたときのみ実行する
  useEffect(() => {
    console.log('name');
  },[name]);

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
  <>
    <p>現在の{name}は{price}円です</p>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={reset}>reset</button>
    <input value={name} onChange={e => setState({...state, name : e.target.value})}/>
  </>
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