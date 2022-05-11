import React from "react";
import useMount from "../index";

export default function demo() {
	useMount(() => {
		console.log("mount");
	});

	return <div>Hello World</div>;
}