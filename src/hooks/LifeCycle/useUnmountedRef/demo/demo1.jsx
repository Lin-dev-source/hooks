import useUnmountedRef from "../index";
import React, { useState, useEffect } from "react";

// 加载后马上按button，效果是三秒后没有执行setTimeout的异步操作
const MyComponent = () => {
	const unmountedRef = useUnmountedRef();
	useEffect(() => {
		setTimeout(() => {
			if (!unmountedRef.current) {
				console.log("component is alive");
			}
		}, 3000);
	}, []);

	return <p>Hello World!</p>;
};

export default () => {
	const [state, setState] = useState(true);

	return (
		<>
			<button type="button" onClick={() => { setState(state => !state); }}>
				{state ? "unmount" : "mount"}
			</button>
			{state && <MyComponent />}
		</>
	);
};