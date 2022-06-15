import React from "react";
import useArray from "../index";

function Array() {
	const [arr, { setArr, push, deleteItem, popItem, reset }] = useArray([1, 2, 3]);
	return (
		<div>
			<h3>{arr.join("-")}</h3>
			<button onClick={() => { push(345); }}>push(345)</button>
			<button onClick={() => { setArr([3, 4, 5]); }}>setArr</button>
			<button onClick={() => { deleteItem(2); }}>deleteItem</button>
			<button onClick={() => { popItem(); }}>deleteItem</button>
			<button onClick={() => { reset(); }}>reset</button>
		</div>
	);
}

export default Array;