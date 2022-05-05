import React, { useEffect, useState } from "react";
import useFirstMountState from "../index"

export default () => {
  const [count, setCount] = useState(0);
	const isfirst = useFirstMountState()
	console.log('isfirst: ', isfirst);

  return (
    <div>
      <div>first:{isfirst}</div>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  )
}