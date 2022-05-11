import React from "react";
import useAsyncEffect from "../index";

export default () => {
	const fn = (): Promise<boolean> => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(true);
			}, 3000);
		});
	};

	useAsyncEffect(async () => {
		console.log("等待...");
		await fn();
		console.log("完成");
	}, []);
};