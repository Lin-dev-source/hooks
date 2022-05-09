import React, { useEffect } from "react";
import useGetState from "../index";

export default function demo() {
	const [count, setCount, getCount] = useGetState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("interval count", getCount());
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <button onClick={() => setCount((count) => count + 1)}>count: {count}</button>;
}