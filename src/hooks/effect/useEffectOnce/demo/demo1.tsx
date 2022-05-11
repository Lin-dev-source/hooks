import React, { useEffect, useState } from "react";
import useEffectOnece from "../index"

export default () => {
  console.log('渲染');
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [onceEffectCount, setOnceEffectOnece] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  useEffectOnece(() => {
    setOnceEffectOnece((c) => c + 1);

  }); // 不用加deps

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {onceEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  )
}