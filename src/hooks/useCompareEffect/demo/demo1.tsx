import React, { useState } from "react";
import useCompareEffect from "../index"

export default function demo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count, setCount] = useState(0)

  const compareFn = (old,next) => {
    console.log('old,next: ', old,next);
    return old[1] === next[1]
  }

  useCompareEffect(() => {
    // 只有count2改变时会触发
    setCount(state => state + 1)
  }, [count1, count2],compareFn)

  return (
    <div>
      <h2>{count}</h2>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <button onClick={() => {setCount1(state => state + 1)}}>count1</button>
      <button onClick={() => {setCount2(state => state + 1)}}>count2</button>
    </div>
  )
}