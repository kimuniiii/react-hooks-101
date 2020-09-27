// 外部モジュール
import React, { useState } from 'react';

//! =========
//! useState
//! =========

/**
 * @概要 useStateを用いた状態管理
 * @説明 初期値を受け取り2つの要素をを持つ配列を返す
 * @args 初期値
 * @returns 2つの要素を持つ配列
 */

const State = () => {

	const [count,setCount] = useState(0);

	// 値を用意して設定するだけの場合
	// setCount（）の中に初期値を入れる

	const increment = () => {
		setCount(count + 1);
	}

	const decrement = () => {
		setCount(count - 1);
	}

	const reset = () => {
		setCount(0);
	}

	const double = () => {
		setCount(count * 2);
	}

	// 現在の値を利用して新たな値を設定する場合
	// setCountの（）の中に関数を入れる

	const increment2 = () => {
		setCount(previousCount => previousCount + 1);
	}

	const decrement2 = () => {
		setCount(previousCount => previousCount + 1);
	}

	const divideByThree = () => {
	  setCount(previousCount => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount
		})
	}

	return (
		<>
		<div>count : {count}</div>
		<div>
		  <button onClick={increment}>+1</button>
		  <button onClick={decrement}>-1</button>
		</div>
		<div>
			<button onClick={increment2}>+1</button>
			<button onClick={decrement2}>-1</button>
		</div>
		<div>
			<button onClick={reset}>reset</button>
			<button onClick={double}>×2</button>
		</div>
		<div>
			<button onClick={divideByThree}>3の倍数の時だけ3で割る</button>
		</div>
		</>
	)
}

export default State;

