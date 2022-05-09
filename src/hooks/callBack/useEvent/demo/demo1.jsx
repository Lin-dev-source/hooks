import React, { useState, useCallback } from "react";
import useEvent from "../index";

export default function demo1() {
	const [count, setCount] = useState(1);
	const fn = useEvent((n) => {
		setCount(state => state + 1);
		console.log(count, n);
	}, []);
	return (
		<button onClick={() => { fn("ddd"); }}>Click</button>
	);
}