import React, { useState } from "react";
import useCountUpdateEffect from "../index";

export default () => {
	const [text, setText] = useState('');

  function inputChange(e){
    setText(e.target.value)
  }

	useCountUpdateEffect(() => {
		console.log('useCountUpdateEffect执行');
	},10);

	return (
		<div>
			<p>{text}</p>
			<p>
				<input type="text" onChange={inputChange} />
			</p>
		</div>
	);
};