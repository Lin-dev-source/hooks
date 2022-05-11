import React, { useState } from "react";
import useRangeUpdateEffect from "../index";

export default () => {
	const [text, setText] = useState('');

	function inputChange(e) {
		setText(e.target.value)
	}

	useRangeUpdateEffect(() => {
		console.log('useRangeUpdateEffect');
	}, [5, 10]);

	return (
		<div>
			<p>{text}</p>
			<p>
				<input type="text" onChange={inputChange} />
			</p>
		</div>
	);
};